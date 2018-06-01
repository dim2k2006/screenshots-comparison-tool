import Pageres from 'pageres';
import path from 'path';
import logger from '../../utils/logger';
import config from '../../config';

/**
 * Get current date
 * @return {String}
 */
const getCurrentDate = () => {
    const date = new Date;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const currentDate = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}-${milliseconds}`;

    return currentDate;
};

/**
 * Make page screenshot
 * @param {Object}
 */
const screenShot = ({
    idx,
    delay = 5,
    page = '',
    resolutions = ['1920x1080'],
    dest
}) => {
    if (typeof dest === 'undefined') {
        logger.warn('Destination folder is not defined. Skipping screenshot.');

        return false;
    }

    new Pageres({delay: delay})
        .src(`${page}`, resolutions)
        .dest(path.resolve(__dirname, dest))
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

export {getCurrentDate, make};
