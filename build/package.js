
var argv = require('minimist')(process.argv.slice(2));
const appBackend = argv.backend? argv.backend : 'persik';
const appTarget = 'browser';
const appType = 'web';

require(__dirname + `/../packages/${appBackend}/${appTarget}/${appType}/package.js`);