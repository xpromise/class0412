/*
  流式文件读取：
    fs.createReadStream(path[, options])
      - path 要读取的文件路径
      - options
        - flags
        - encoding
        - fd
        - mode
        - autoClose
        - start
        - end
        - highWaterMark 默认每次读取文件的大小 64kb
 */

const fs = require('fs');

//创建一个可读流
const rs = fs.createReadStream('C:\\Users\\web\\Desktop\\1.mp4');
//创建一个可写流
const ws = fs.createWriteStream('1.mp4');

//绑定事件监听

//绑定一次性事件
ws.once('open', () => console.log('可写流打开成功~'));

//绑定关闭文件的事件
ws.once('close', () => console.log('可写流关闭成功~'));

//绑定一次性事件
rs.once('open', () => console.log('可读流打开成功~'));

//绑定关闭文件的事件
rs.once('close', () => {
  console.log('可读流关闭成功~');
  //说明可读流读取完了所有数据，关闭可写流
  ws.end();
});

//绑定读取数据的事件监听
rs.on('data', data => {
  // console.log(data);
  console.log(data.length);
  //将读取的数据写入到指定文件中
  ws.write(data);
})


