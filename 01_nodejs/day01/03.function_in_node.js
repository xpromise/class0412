/*
  node中每一个模块都包裹在一个函数中
    function (exports, require, module, __filename, __dirname) {}
      exports  暴露模块
      require  引入模块
      module   module.exports 暴露模块
      __filename  文件的绝对路径
      __dirname   文件夹的绝对路径
 */

// console.log(this); //{}

console.log(arguments.callee.toString());

console.log(__filename);  //C:\Users\web\Desktop\class0412\day01\03.function_in_node.js
console.log(__dirname);   //C:\Users\web\Desktop\class0412\day01