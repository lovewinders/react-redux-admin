/*
* @Author: zhangyujie
* @Date:   2017-05-16 14:38:24
* @Last Modified by:   zhangyujie
* @Last Modified time: 2017-05-16 15:51:40
* @Email: zhangyujie3344521@163.com
* @File Path: /Users/zhangyujie/node/gitlab/tueasy/zhihui110/webpack.config.base.js
* @File Name: webpack.config.base.js
* @Descript: 
*/
const path = require('path');

const src =  path.join(__dirname, 'src');
module.exports = {
    cache: false,
    entry: {
        'app': './src/index.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.json', '.css', '.styl', '.sass', '.scss'],
        alias: {
            src: 'src'
        },
        modulesDirectories: [
            'bower_components',
            'node_modules',
            'web_modules'
        ]
    },
    devServer: {
        port: 3303
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        publicPath: '/dist/',
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: src
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    babel: {
        presets: ['es2015', 'react', 'stage-3'],
        plugins: ['transform-object-rest-spread', 'transform-class-properties']
    }
};