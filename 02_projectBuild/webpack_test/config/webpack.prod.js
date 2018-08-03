/*
  1. 在terminal输入 webpack ./src/js/app.js ./build/js/built.js
    webpack 入口文件 输出文件
    问题： 只能编译打包js / json文件，别的文件识别不了
  2. 执行webpack指令，默认在当前目录下找webpack.config.js配置文件
  webpack --display-modules  查看隐藏的任务
  
  4个核心概念
    entry： 入口文件  将所有打包资源全部引入
    output： 输出文件 将资源输出到指定目录下
    loader： 解析webpack解析不了的文件，将文件解析成webpack的模块
    plugins： 执行任务更广的任务，loader做不了的它来完成
 */
const {resolve} = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const cleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanCSSPlugin = require('less-plugin-clean-css');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  output: {
    path: resolve(__dirname, '../dist'),
    filename: './js/[name].[hash:10].js'
  },
  //loader
  module: {
    rules: [   //配置规则
      {
        test: /\.less$/,   //规则检测文件类型
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: {
              // minimize: true,
              sourceMap: true
            }
          }, 'postcss-loader', {
            loader: 'less-loader', options: {
              plugins: [
                new CleanCSSPlugin({ advanced: true })
              ]
            }
          }]
        })
      }
    ]
  },
  //插件
  plugins: [
    new ExtractTextPlugin("./css/[name].[hash:10].css"),
    new cleanWebpackPlugin('dist', {
      root: resolve(__dirname, '../')
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      title: 'webpack',       //会为创建的html文件添加title标签
      filename: 'index.html',  //创建的html文件名称
      template: './src/index.html',  //以指定文件为模板文件来创建新的文件，新的文件会引入相应的css/js
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ],
  devtool: 'source-map'
})
  
