const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const progressBarWebpackPlugin = require('progress-bar-webpack-plugin')

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new VueLoaderPlugin(),
        new progressBarWebpackPlugin()
    ],
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias: {
            //不这样写 import vue 时实际引入的是vue.common.js
            'vue': 'vue/dist/vue.js'
        }
    },
    module:{
        rules:[
            {
                test:/\.(jsx?|babel|es6)$/,
                loader:'babel-loader'
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                loaders:['style-loader','css-loader']
            },
            {
                test:/\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader'
            }
        ]
    }
    /* optimization:{
        splitChunks:{
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    } */
}