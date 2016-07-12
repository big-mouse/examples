var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './index'
    ],
    output: {
        path: path.join(__dirname, '.'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ]
    }
};