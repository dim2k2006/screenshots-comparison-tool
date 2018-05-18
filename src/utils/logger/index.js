import colors from 'colors';
import Tracer from 'tracer';

const logger = Tracer.colorConsole({
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

export default logger;
