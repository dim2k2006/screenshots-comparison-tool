import path from 'path';
import glob from 'glob';
import config from '../src/config';

const pagesPath = config.pagesPath;

/**
 * Get the list of all pages
 * @returns {Array}
 */
const getPages = () => {
    const dir = path.resolve(__dirname, '..', '..', pagesPath);

    const files = glob.sync(`${dir}/*.html`);
    const pages = files.map((file) => file.split('/').pop());

    return pages;
};

export default getPages;
