const logger = require('./');

describe('logger', () => {
    test('Should has "log" method.', () => {
        expect(typeof logger.log).toBe('function');
    });

    test('Should has "trace" method.', () => {
        expect(typeof logger.trace).toBe('function');
    });

    test('Should has "debug" method.', () => {
        expect(typeof logger.debug).toBe('function');
    });

    test('Should has "info" method.', () => {
        expect(typeof logger.info).toBe('function');
    });

    test('Should has "warn" method.', () => {
        expect(typeof logger.warn).toBe('function');
    });

    test('Should has "error" method.', () => {
        expect(typeof logger.error).toBe('function');
    });
});
