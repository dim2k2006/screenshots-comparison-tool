const Pageres = require('pageres');
const path = require('path');
const logger = require('../../../../utils/logger');
const getCurrentDate = require('../../../../utils/getCurrentDate');

/**
 * Make page screenshot
 * @param {Object}
 */
const screenShot = ({
    idx,
    delay = 5,
    page = '',
    resolutions = ['1920x1080'],
    dest,
    currentDate = getCurrentDate()
}) => {
    if (typeof dest === 'undefined') {
        logger.warn('Destination folder is not defined. Skipping screenshot.');

        return false;
    }

    const resultPath = path.dirname(process.argv[1]);

    new Pageres({delay: delay})
        .src(`${page}`, resolutions)
        .dest(path.resolve(resultPath, dest, currentDate))
        .run()
        .then(() => logger.log(`Page ${idx + 1}: ${page} - screenshot done!`));
};

module.exports = screenShot;
