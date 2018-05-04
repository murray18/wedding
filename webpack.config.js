'use strict';

var nodeExternals = require('webpack-node-externals');
var path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = [
    {
      plugins: [
        new CompressionPlugin({   <-- Add this
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
      ]
        name: 'Server-side application',
        entry: './server/app.js',
        output: {
            path: path.resolve(__dirname, 'bin'),
            filename: 'app.bundle.js'
        },
        target: 'node',
        externals: [nodeExternals()],
        module: {
            loaders: [
                { test: /\.json$/, loader: 'json-loader' },
                { test: /\.js$/, loader: 'babel-loader' },
            ]
        },
        node: {
            console: true,
            fs: false,
            net: true,
            tls: false,
        },
    },
    {
        name: 'Client-side application',
        entry: './client/main.js',
        output: {
            path: path.resolve(__dirname,'static/js'),
            filename: 'bundle.js'
        },
        target: 'web',
        module: {
            loaders: [
                { test: /\.json$/, loader: 'json-loader' },
                { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            ]
        },
    },
];
