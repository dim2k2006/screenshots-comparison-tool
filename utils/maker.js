import Pageres from 'pageres';
import path from 'path';
import getPages from './getPages';
import config from '../src/config';

const delay = config.delay;
const resolutions = config.resolutions;
const dest = config.dest;
const pages = getPages();
const url = config.url;

const date = new Date;
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
const dirName = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}-${milliseconds}`;

console.log(`Total pages: ${pages.length}`);

pages.forEach((page, idx) => {
    new Pageres({delay: delay})
        .src(`${url}${page}`, resolutions)
        .dest(path.resolve(__dirname, '..', dest, dirName))
        .run()
        .then(() => console.log(`Page ${idx + 1}: ${page} - done!`));
});
