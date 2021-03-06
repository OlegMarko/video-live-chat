const path = require('path');

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, '.')
    }
};