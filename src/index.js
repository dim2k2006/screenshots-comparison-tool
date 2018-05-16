import make from './components/make';
import compare from './components/compare';

/**
 * Creates a new Screenshots class
 * @return {Object}
 * @constructor
 */
const Screenshots = function(makeScreenshots = make, compareScreenshots = compare) {
    this.make = makeScreenshots;
    this.compare = compareScreenshots;

    return {
        make: this.make,
        compare: this.compare
    };
};

export default new Screenshots();
