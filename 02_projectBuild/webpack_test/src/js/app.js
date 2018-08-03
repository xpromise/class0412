/*
  webpack默认能解析js和json文件，其他文件需要依赖loader解析
  
 */
import {add, mul} from './module1';
import sum from './module2';
import data from '../json/data';
import '../less/test1.less';
import '../less/test2.less';

console.log(add(10, 20));
console.log(mul(10, 20));
console.log(sum(1, 2, 4, 6, 8));
console.log(data.name , data.age);

