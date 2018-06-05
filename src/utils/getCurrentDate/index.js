/**
 * Get current date
 * @param {String} dateString (in ISO format, for example: 2015-03-25)
 * @return {String}
 */
const getCurrentDate = (dateString = '') => {
    const date = (dateString !== '')
        ? new Date(dateString)
        : new Date();
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

module.exports = getCurrentDate;
