const Pageres = require('pageres');
const path = require('path');
const logger = require('../../utils/logger');
const getCurrentDate = require('../../utils/getCurrentDate');
const config = require('../../config');

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

/**
 * Creates screenshots of the given pages
 * @param {Object} props
 */
const make = (props = {}) => {
    const options = {
        ...config,
        ...props
    };
    const {pages = [], delay, resolutions, dest} = options;

    if (!pages.length) {
        logger.warn('Pages are not defined. Terminating process.');

        return false;
    }

    logger.log(`Total pages: ${pages.length}`);

    pages.forEach((page, idx) => {
        screenShot({page, idx, delay, resolutions, dest});
    });
};

module.exports = make;
