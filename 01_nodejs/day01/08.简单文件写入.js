/*
  简单文件写入
    fs.writeFile(file, data[, options], callback)
      - file 要写入的文件路径
      - data 要写入的内容 buffer / string
      - options 可选的配置选项
        - encoding 'utf8'
        - mode     0o666
        - flag     'w'
      - callback
        - err
 */

const fs = require('fs');

let buf = Buffer.from('hello atguigu');

fs.writeFile('2.txt', buf, {encoding: 'utf8', mode: 0o666, flag: 'w'}, err => {
  if (!err) {
    console.log('文件写入成功~');
  } else {
    console.log(err);
  }
})