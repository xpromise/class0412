/*
  此模块用来连接数据库的
 */
//引入mongoose
const mongoose = require('mongoose');
//创建promise对象
const promise = new Promise((resolve, reject) => {
  //连接数据库
  mongoose.connect('mongodb://localhost:27017/mongoose_modular', {useNewUrlParser: true});
  //绑定事件监听
  mongoose.connection.once('open', err => {
    if (!err) {
      console.log('数据库连接成功了~~~');
      resolve();
    } else {
      reject(err);
    }
  })
})
//暴露出去
module.exports = promise;