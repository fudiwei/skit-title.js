const path = require('path');

const DIR_SRC = path.resolve('./src');
const DIR_DIST = path.resolve('./dist');

/**
 *
 * @typedef { import("webpack").Configuration } Configuration
 * @type {Configuration}
 */
module.exports = {
    mode: 'development',

    context: DIR_SRC,

    entry: './index.js',

    output: {
        path: DIR_DIST,
        filename: 'index.js',
        library: '$$title',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },

    devtool: 'source-map',

    node: {
        __filename: true,
        __dirname: true
    },

    resolve: {
        alias: {
            '@': DIR_SRC
        },
        extensions: ['.js'],
        modules: ['node_modules', '*']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
};
