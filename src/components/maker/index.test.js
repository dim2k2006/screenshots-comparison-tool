const make = require('./');

describe('make', () => {
    test('Should call "warn" method and return false.', () => {
        const logger = {
            warn: jest.fn(),
            log: jest.fn()
        };
        const props = {pages: []};
        const result = make(props, logger);

        expect(result).toBe(false);
        expect(logger.warn.mock.calls.length).toBe(1);
    });

    test('Should call "log" method, should call "screenShot" function and return true.', () => {
        const logger = {
            warn: jest.fn(),
            log: jest.fn()
        };
        const screenShot = jest.fn();
        const props = {pages: ['https://yandex.by/']};
        const result = make(props, logger, screenShot);

        expect(result).toBe(true);
        expect(logger.log.mock.calls.length).toBe(1);
        expect(screenShot.mock.calls.length).toBe(1);
    });
});
