const make = require('./components/maker');

// import {compare} from './components/comparator';

/**
 * Creates a new Screenshots class
 * @return {Object}
 * @constructor
 */
const Screenshots = function(makeScreenshots = make) {
    this.make = makeScreenshots;
    // this.compare = compareScreenshots;

    return {
        make: this.make
        // compare: this.compare
    };
};

module.exports = new Screenshots();
