/*
  通过npm下载包：  npm install xxx  / npm i xxx
    node_modules 放置下载的包
    package-lock.json 放置缓存的数据
    dependencies 在package.json中多一个生产依赖
    
    npm install xxx --save-dev  / npm i xxx -D
      将指定包添加开发依赖中
    
    npm init 初始化包
    
    npm remove xxx / npm r xxx
      移除指定的包(将依赖和包全部移除掉)
      
    npm i xxx -g
      全局安装一个包（通常全局安装的包都有指令）
      
    npm i
      将package.json中的所有依赖全部下载下来
 */

const math = require('math');

console.log(math.add(2, 3));
console.log(math.mul(2, 3));
