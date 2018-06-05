const logger = require('../../utils/logger');
const config = require('../../config');
const screenShot = require('./modules/screenShot');

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

    return true;
};

module.exports = make;
