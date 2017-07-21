/*
* @Author: zhangyujie
* @Date:   2017-05-16 09:48:04
* @Last Modified by:   zhangyujie
* @Last Modified time: 2017-05-16 13:07:25
* @Email: zhangyujie3344521@163.com
* @File Path: /Users/zhangyujie/node/gitlab/tueasy/zhihui110/webpack.lib.js
* @File Name: webpack.lib.js
* @Descript: 
*/

'use strict';
const webpack = require('webpack');

const libs = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router', 
    'redux-thunk',
    'react-router-redux',
    'lodash'
];

const resources = [
    'antd'
];
//去掉 node的 fs 模块
var miniConfig =  {
    cache: true,
    node: {
        fs: 'empty'
    },
    output: {
        path: 'dist',
        filename: '[name].js',
        library: '[name]',
        chunkFilename: 'chunk/[libhash:8][name].chunk.min.js'
    },
    entry: {
        libs,
        resources
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'lib_manifest.json',
            name: '[name]',
            context: __dirname
        }) //,
        // new CompressionPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.(js|html)$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ]
};
/*生产环境下压缩*/
if (process.env.NODE_ENV === 'production') { 

    miniConfig.plugins = [
        new webpack.DllPlugin({
            path: 'lib_manifest.json',
            name: '[name]',
            context: __dirname
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })];

}

module.exports = miniConfig;