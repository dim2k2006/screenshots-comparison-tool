const logger = require('../../utils/logger');
const config = require('../../config');
const screenShot = require('./modules/screenShot');

/**
 * Creates screenshots of the given pages
 * @param {Object} props
 * @param {Object} Logger
 * @param {Function} screen
 * @returns {Boolean}
 */
const make = (props = {}, Logger = logger, screen = screenShot) => {
    const options = {
        ...config,
        ...props
    };
    const {pages = [], delay, resolutions, dest} = options;

    if (!pages.length) {
        Logger.warn('Pages are not defined. Terminating process.');

        return false;
    }

    Logger.log(`Total pages: ${pages.length}`);

    pages.forEach((page, idx) => {
        screen({page, idx, delay, resolutions, dest});
    });

    return true;
};

module.exports = make;
