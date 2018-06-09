import screenShot from './';

describe('screenShot', () => {
    test('Should call "warn" method and return false.', () => {
        const logger = {
            warn: jest.fn(),
            log: jest.fn()
        };
        const result = screenShot({Logger: logger});

        expect(result).toBe(false);
        expect(logger.warn.mock.calls.length).toBe(1);
    });

    test('Should call "Page" function.', () => {
        const logger = {
            warn: jest.fn(),
            log: jest.fn()
        };
        const Page = jest.fn();

        Page.prototype.src = function() {
            return this;
        };

        Page.prototype.dest = function() {
            return this;
        };

        Page.prototype.run = function() {
            return this;
        };

        Page.prototype.then = function() {
            return this;
        };

        screenShot({Page, Logger: logger, dest: 'someFolder'});

        expect(true).toBe(true);
    });
});
