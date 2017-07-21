const  webpackBase = require('./webpack.config.base');
const webpack = require('webpack');
const libJson = require('./lib_manifest.json');

const cfg = Object.assign(webpackBase, {
    devtool: 'cheap-module-eval-source-map',
    debug: true,
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: libJson
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"development"'
            }
        })
    ]
});

module.exports = cfg;