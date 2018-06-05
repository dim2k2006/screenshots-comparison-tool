const getCurrentDate = require('./');

describe('getCurrentDate', () => {
    test('Should return "2015-3-25-3-0-0-0".', () => {
        const date = getCurrentDate('2015-03-25');

        expect(date).toBe('2015-3-25-3-0-0-0');
    });

    test('Should return "2018-5-28-18-25-0-0".', () => {
        const date = getCurrentDate('2018-05-28T18:25:00');

        expect(date).toBe('2018-5-28-18-25-0-0');
    });

    test('Should return "1990-6-29-6-35-0-0".', () => {
        const date = getCurrentDate('1990-06-29T06:35:00');

        expect(date).toBe('1990-6-29-6-35-0-0');
    });

    test('Should return current date.', () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds();
        const dateString = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}-${milliseconds}`;
        const currentDate = getCurrentDate();

        expect(dateString).toBe(currentDate);
    });
});
