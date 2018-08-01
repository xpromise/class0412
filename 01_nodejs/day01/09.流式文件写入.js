/*
  流式文件写入
    fs.createWriteStream(path[, options])
      - path 要写入的文件路径
      - options 可选的选项
        - flags
        - encoding
        - fd
        - mode
        - autoClose  是否自动关闭，默认值true
        - start  要写入文件的起始位置
 */

const fs = require('fs');

//创建可写流
const ws = fs.createWriteStream('3.txt');

//绑定打开文件的事件
//绑定一次性事件
ws.once('open', () => console.log('文件打开成功~'));

//绑定关闭文件的事件
ws.once('close', () => console.log('文件关闭成功~'));

//写入文件
ws.write('锄禾日当午');
ws.write('汗滴禾下土');
ws.write('谁知盘中餐');
ws.write('粒粒皆辛苦');


//手动关闭可写流
// ws.close();
ws.end();