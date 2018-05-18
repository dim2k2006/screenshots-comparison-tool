// import Pageres from 'pageres';
// import path from 'path';
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
 *
 */
const makeScreenshot = (/* props = {}*/) => {
    // new Pageres({delay: delay})
    //     .src(`${url}${page}`, resolutions)
    //     .dest(path.resolve(__dirname, '..', dest, dirName))
    //     .run()
    //     .then(() => console.log(`Page ${idx + 1}: ${page} - done!`));
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
    const {pages = [], delay, resolutions} = options;

    if (!pages.length) {
        logger.warn('Pages are not defined. Terminating process.');

        return false;
    }

    logger.log(`Total pages: ${pages.length}`);

    pages.forEach((page, idx) => {
        makeScreenshot({page, idx, delay, resolutions});
    });
};

export {getCurrentDate, make};
