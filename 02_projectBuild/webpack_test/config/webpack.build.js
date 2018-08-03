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

module.exports = merge(common, {
  //loader
  module: {
    rules: [   //配置规则
      {
        test: /\.less$/,   //规则检测文件类型
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", 'less-loader']
        })
      }
    ]
  },
  //插件
  plugins: [
    new ExtractTextPlugin("./css/styles.css"),
    new cleanWebpackPlugin('build', {
      root: resolve(__dirname, '../')
    })
  ]
})
  
