const Pageres = require('pageres');
const path = require('path');
const logger = require('../../../../utils/logger');
const getCurrentDate = require('../../../../utils/getCurrentDate');

/**
 * Makes the screenshot of the page
 * @param {Object}
 */
const screenShot = ({
    idx = 0,
    delay = 5,
    page = '',
    resolutions = ['1920x1080'],
    dest,
    currentDate = getCurrentDate(),
    Logger = logger,
    Page = Pageres
}) => {
    if (typeof dest === 'undefined') {
        Logger.warn('Please provide dest.');

        return false;
    }

    const resultPath = path.dirname(process.argv[1]);

    new Page({delay: delay})
        .src(`${page}`, resolutions)
        .dest(path.resolve(resultPath, dest, currentDate))
        .run()
        .then(() => Logger.log(`Page ${idx}: ${page} - screenshot done!`));
};

module.exports = screenShot;
