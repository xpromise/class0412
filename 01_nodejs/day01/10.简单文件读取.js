/*
  简单文件读取：
    fs.readFile(path[, options], callback)
      - path 要读取的文件路径
      - options 可选值
        - flags
        - encoding
      - callback
        - err
        - data 读取文件的数据,是buffer数据
 */

const fs = require('fs');

fs.readFile('package.json', (err, data) => {
  if (!err) {
    console.log(data.toString());
  } else {
    console.log(err);
  }
})