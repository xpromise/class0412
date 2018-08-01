const fs = require('fs');

//创建一个可读流
const rs = fs.createReadStream('C:\\Users\\web\\Desktop\\1.mp4');
//创建一个可写流
const ws = fs.createWriteStream('1.mp4');
/*
  可读流.pipe(可写流)
    将可读流的数据流向可写流
    自动关闭可读/写流以及相应的文件
 */
rs.pipe(ws);