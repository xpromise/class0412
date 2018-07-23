//引入express
const express = require('express');
//引入连接数据库的模块
const db = require('./database/db');
//引入router对象
const userRouter = require('./router/userRouter');
//创建应用对象
const app = express();
//内置中间件
app.use(express.static('public'));


//连接数据库
db
  .then(() => {
    //应用路由器
    app.use(userRouter);
  })
  .catch(err => console.log(err))

//监听端口号
app.listen(3000, () => console.log('服务器启动成功了~'));