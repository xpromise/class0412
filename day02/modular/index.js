/*
  主模块
 */
//引入连接数据库模块
const db = require('./database/db');
//引入集合模块
const Students = require('./models/Students');


db
  .then(() => {
    //对集合进行操作
    Students.create({
      name: '周雨',
      age: 18,
      sex: '男',
      phone: '17777777777',
      hobby: ['鸡腿', '烤肉拌饭'],
      info: '高富帅'
    }, err => {
      if (!err) console.log('文档插入成功');
      else console.log(err);
    })
  })
  .catch(err => console.log(err))
