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

module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    path: resolve(__dirname, 'build'),
    filename: './js/built.js'
  },
  //loader
  module: {
    rules: [   //配置规则
      /*{
        test: /\.less$/,   //规则检测文件类型
        use: [{           //使用哪种loader处理检测好的文件   执行顺序从右往左
          loader: "style-loader" // 生成style标签，放置着css样式
        }, {
          loader: "css-loader" // 将css转化成一个模块加载js文件中（commonjs）
        }, {
          loader: "less-loader" // 将less编译成css
        }]
      },*/
      {
        test: /\.less$/,   //规则检测文件类型
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", 'less-loader']
          /*use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }]*/
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,     // 8kb以下的图片文件会转化为base64格式
              outputPath: 'images',           //文件资源的输出路径
              publicPath: '../images'  //css资源图片路径
            }
          }
        ]
      }
    ]
  },
  //插件
  plugins: [
    new ExtractTextPlugin("./css/styles.css"),
  ]
}