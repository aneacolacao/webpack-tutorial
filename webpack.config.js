const webpack = require('webpack');

let config = {
    entry: './index.js',
    output: {
        filename: 'output.js'
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js$/, // files ending with .js
                exclude: /node_modules/, //exclude the node_modules directory
                loader: "babel-loader" //user this (babel-core)loader
            },
            {
                test: /\.scss$/, // files ending with .scss
                loader: ['style-loader','css-loader', 'sass-loader'] // user these loaders
            }
        ]
    }

}

module.exports = config;