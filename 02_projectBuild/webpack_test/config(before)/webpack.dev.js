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
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  //入口
  entry: ['./src/js/app.js', './src/index.html'],
  //输出
  output: {
    path: resolve(__dirname, '../build'),
    filename: './js/built.js'
  },
  //loader
  module: {
    rules: [   //配置规则
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
      },
      {
        test: /\.js$/, // 涵盖 .js 文件
        enforce: "pre", // 预先加载好 jshint-loader
        exclude: /node_modules/, // 排除掉 node_modules 文件夹下的所有文件
        use: [
          {
            loader: "jshint-loader",
            options: {
              // 查询 jslint 配置项，请参考 http://www.jshint.com/docs/options/
              // 例如
              //jslint 的错误信息在默认情况下会显示为 warning（警告）类信息
              //将 emitErrors 参数设置为 true 可使错误显示为 error（错误）类信息
              emitErrors: true,
              //jshint 默认情况下不会打断webpack编译
              //如果你想在 jshint 出现错误时，立刻停止编译
              //请设置 failOnHint 参数为true
              failOnHint: true,
              esversion: 6
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.less$/,   //规则检测文件类型
        use: [{           //使用哪种loader处理检测好的文件   执行顺序从右往左
          loader: "style-loader" // 生成style标签，放置着css样式
        }, {
          loader: "css-loader" // 将css转化成一个模块加载js文件中（commonjs）
        }, {
          loader: "less-loader" // 将less编译成css
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {}
        }
      }
    ]
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',       //会为创建的html文件添加title标签
      filename: 'index.html',  //创建的html文件名称
      template: './src/index.html'  //以指定文件为模板文件来创建新的文件，新的文件会引入相应的css/js
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  //webpack-dev-server@2  开启服务器
  devServer: {
    contentBase: './build',
    hot: true,    //开启热模替换
    open: true,   //自动打开浏览器
    port: 3000,
    compress: true  //启动gzip压缩
  },
}