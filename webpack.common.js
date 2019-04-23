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
        filename:'[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),//__filename始终是用绝对路径显示一个文件的位置，而__dirname则是该文件所在目录的绝对路径
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
            'vue': 'vue/dist/vue.js',
            'src':path.resolve(__dirname,'./src')
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
                test:/\.(scss|css)$/,
                use:['style-loader','css-loader','sass-loader']
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