/*
  Buffer
 */

// let buf = new Buffer(10);  //方法被废弃了
// console.log(buf);

let buf1 = Buffer.allocUnsafe(50);  //可能包含敏感数据，性能最好
// buf1.fill(0);
console.log(buf1);

/*
  内部每一个元素占一个字节
    00 - ff
    0 - 255
    00000000 - 1111111
    
  1 byte = 8 bit
  1 kb = 1024 byte
  1 mb = 1024 kb
  1 gb = 1024 mb
  
  英文或者数字 占 1个字节
  中文  占 3个字节
 */

let buf2 = Buffer.alloc(50);  //不包含敏感数据，性能较差
console.log(buf2);

let buf3 = Buffer.from('hello atguigu');
console.log(buf3);
console.log(buf3.length);
buf3[0] = 0xff
console.log(buf3[0]);
console.log(buf3);

buf3.forEach(item => {
  console.log(item);
})

console.log(buf3.toString());

let buf4 = Buffer.from('尚硅谷');
console.log(buf4);