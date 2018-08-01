/*
  require() 引入模块的路径：
    自己定义的模块（自定义模块），引入路径必须以 ./ 或 ../ 开头，否则报错
    第三方的模块 和 node自带的模块（核心模块）， 引入路径直接写模块名就可以了
    
    node中能解析的文件：
      .node .js .json
    当引入模块没有写文件后缀名时，默认会以以上三种方式补充后缀名，如果不是以上三种文件就会报错
 */
const m1 = require('./myModule1');
const m2 = require('./myModule2');

/*
  exports 只能通过对象点取属性的方式暴露
  module.exports 通常直接等于对象或者要暴露的内容
  
  暴露出去的本质：
    向外暴露出去的是module.exports
 */
/*console.log(m2);
console.log(m1(2, 3));
console.log(m2.sum(1, 2, 3, 5 , 4));*/

let person = {
  hobby: {}
}

let hobby = person.hobby;

hobby.eat = '臭豆腐'

console.log(person);

hobby = {
  drink: 'cola'
}

console.log(hobby, person);

//向外暴露出去的是person.hobby
