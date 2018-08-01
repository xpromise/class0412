//引入express
const express = require('express');
//引入连接数据库的模块
const db = require('./database/db');
//引入express-session，用来创建session对象的
const session = require('express-session');
//将session保存在数据库中
const MongoStore = require('connect-mongo')(session);
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
    //解析cookie，将cookie挂载到req.session上
    app.use(session({
      secret: 'atguigu class0412',   //加密密匙
      saveUninitialized: false, // 未初始化不保存session对象
      resave: false, // 未修改不保存session对象
      store: new MongoStore({
        url: 'mongodb://localhost:27017/exec',
        touchAfter: 24 * 3600 // 24小时内部不重新保存session，除非里面的数据被修改了
      })
    }));
    
    //应用路由器
    app.use(userRouter);
    app.use(userFaceRouter);
  })
  .catch(err => console.log(err))

//监听端口号
app.listen(3000, () => console.log('服务器启动成功了~'));