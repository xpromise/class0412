//引入express
const express = require('express');
//引入连接数据库的模块
const db = require('./database/db');
//引入router对象
const userRouter = require('./router/userRouter');
const userFaceRouter = require('./router/userFaceRouter');
//创建应用对象
const app = express();
//设置模板资源目录
app.set('views', 'views');
//设置模板引擎
app.set('view engine', 'ejs');
//连接数据库
db
  .then(() => {
    //应用路由器
    app.use(userRouter);
    app.use(userFaceRouter);
  })
  .catch(err => console.log(err))

//监听端口号
app.listen(3000, () => console.log('服务器启动成功了~'));