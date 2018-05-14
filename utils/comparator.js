import fs from 'fs';
import path from 'path';
import BlinkDiff from 'blink-diff';
import colors from 'colors';
import Tracer from 'tracer';
import config from '../config';

const tracer = Tracer.colorConsole({
    format: '{{timestamp}} | {{message}}',
    dateformat: 'HH:MM:ss.L',
    filters: [
        {
            log: colors.green,
            trace: colors.magenta,
            debug: colors.blue,
            info: colors.white,
            warn: colors.yellow,
            error: [colors.red, colors.bold]
        }
    ]
});

const dest = config.dest;
const diffDest = 'diff';
const imageAPath = config.imageAPath;
const imageBPath = config.imageBPath;

const files = [];
const targetFolder = path.resolve(__dirname, '..', dest, imageAPath);

fs.readdirSync(targetFolder).forEach(file => {
    files.push(file);
});

if (!fs.existsSync(path.resolve(__dirname, '..', dest, diffDest))) {
    fs.mkdirSync(path.resolve(__dirname, '..', dest, diffDest));
}

tracer.log(`Total images: ${files.length}`);

files.forEach((file, idx) => {
    const diff = new BlinkDiff({
        imageAPath: path.resolve(__dirname, '..', dest, imageAPath, file),
        imageBPath: path.resolve(__dirname, '..', dest, imageBPath, file),

        thresholdType: BlinkDiff.THRESHOLD_PERCENT,
        threshold: 0.01, // 1% threshold

        imageOutputPath: path.resolve(__dirname, '..', dest, diffDest, file)
    });

    diff.run(function(error, result) {
        if (error) {
            throw error;
        } else {
            const code = diff.hasPassed(result.code) ? 'Passed' : 'Failed';
            const differences = result.differences;
            const text = `File ${idx + 1}: ${file} - ${code}. Found ${differences} differences`;

            if (code === 'Failed') {
                tracer.error(text);
            } else if (differences > 0) {
                tracer.warn(text);
            } else {
                tracer.log(text);
            }
        }
    });
});
