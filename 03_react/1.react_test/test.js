/*
  1.  声明式：只关注于结果，不关心过程是怎么实现的（填空题）
  2.  命令式：关心每一步的实现过程和结果（简答题）
 */

let arr1 = [1, 2, 3, 4];
let arr2 = [];

//命令式
arr1.forEach(item => {
  arr2.push(item + 10);
})

console.log(arr2);
//声明式
let arr3 = arr1.map(item => item + 10);
console.log(arr3);

/*
  MVC架构
    M - model 数据层    存储操作数据的（数据库）
    V - view  视图层    页面（html，模板页面）
    C - control 控制层  操作数据层和视图层，负责处理业务逻辑
 */