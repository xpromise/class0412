/*
  fs 文件系统 （node中的核心模块）
    异步文件写入：
      1. 打开文件
        fs.open(path, flags[, mode], callback)
          - path 文件路径
          - flags 要对文件进行的操作 w （write） r (read)  a (add追加)
          - mode 可选的, 默认值 0o666  设置文件的操作权限
            0o111 文件可执行
            0o222 文件可写入
            0o444 文件可读取
            0o666 文件可读可写
          - callback
            - error 错误对象 (错误优先机制)
              当方法出了问题，error就会是一个对象，包含着错误信息
              当方法没有问题，error就是null
            - fd 文件描述符，唯一的值
           
      2. 写入文件
        fs.write(fd, string[, position[, encoding]], callback)
          - fd 文件描述符
          - string 要写入内容
          - position 可选的，默认值 0  写入文件的起始位置
          - encoding 可选的，默认值 utf8 写入内容的编码方式
          - callback
            - error 错误对象
            - written 写入文件的字节数
            - string 写入文件的内容
            
      3. 关闭文件
        fs.close(fd, callback)
          - fd 文件描述符
          - callback
            - err 错误对象
  
 */

const fs = require('fs');

//打开文件
fs.open('1.txt', 'w', 0o666, (err, fd) => {
  if (!err) {
    //没有错误
    console.log(fd); //3
    //写入文件
    fs.write(fd, '今天天气真晴朗！！！', 0, 'utf8', (err, written, string) => {
      if (!err) {
        console.log(written, string);
      } else {
        console.log(err);
      }
      //关闭文件
      fs.close(fd, err => {
        console.log(err); //null
      })
    })
  } else {
    //有错误
    console.log(err);
  }
})


