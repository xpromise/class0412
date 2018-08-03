/*
  执行webpack指令，默认在当前目录下找webpack.config.js配置文件
  webpack --display-modules  查看隐藏的任务
  
  4个核心概念
    entry： 入口文件  将所有打包资源全部引入
    output： 输出文件 将资源输出到指定目录下
    loader： 解析webpack解析不了的文件，将文件解析成webpack的模块
    plugins： 执行任务更广的任务，loader做不了的它来完成
 */
const {resolve} = require('path');

module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'built.js'
  },
  //loader
  module: {
    rules: [   //配置规则
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
      
    ]
  }
}