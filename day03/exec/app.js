//引入express
const express = require('express');
//引入连接数据库的模块
const db = require('./database/db');
//引入集合对象
const Users = require('./models/Users');
//创建应用对象
const app = express();

//连接数据库
db
  .then(() => {
    //登录路由
    app.get('/login', (req, res) => {
    
    })

    //注册路由
    app.get('/regist', (req, res) => {
      /*
        1. 获取用户提交的请求参数
        2. 验证密码和确认密码是否一致
        3. 对用户名、密码、邮箱进行正则验证
        4. 去数据库中查找是否存在当前用户
        5. 保存数据在数据库中
       */
    
      // 1. 获取用户提交的请求参数
      const {username, password, rePassword, email} = req.query;
      // 2. 验证密码和确认密码是否一致
      if (password !== rePassword) {
        //说明密码不一致，返回错误信息给用户
        res.send('您两次输入的密码不一致，请重新输入');
        return;
      }
      // 3. 对用户名、密码、邮箱进行正则验证
      const usernameReg = /^[a-zA-Z0-9_]{5,12}$/;    //只能包含英文、数字和下划线，长度为5-12位。
      const passwordReg = /^[a-zA-Z0-9_]{6,18}$/    //只能包含英文、数字和下划线，长度为6-18位。
      const emailReg = /^[a-z0-9_]{5,18}@[a-z0-9_]{2,5}\.com$/
    
      if (!usernameReg.test(username)) {
        //用户名不符合规范，返回错误信息给用户
        res.send('用户名需要包含英文、数字和下划线，长度为5-12位。');
        return;
      } else if (!passwordReg.test(password)) {
        res.send('密码需要包含英文、数字和下划线，长度为6-18位。');
        return;
      } else if (!emailReg.test(email)) {
        res.send('邮箱格式错误，请重新输入');
        return;
      }
      // 4. 去数据库中查找是否存在当前用户
      Users.findOne({username}, (err, data) => {
        if (!err) {
          //方法没有出错
          if (data) {
            //说明用户名已存在
            res.send('用户名已存在，请重新输入');
          } else {
            //用户名不存在，可以保存
            // 5. 保存数据在数据库中
            Users.create({
              username,
              password,
              email
            }, err => {
              if (!err) res.send('注册成功~');
            })
          }
        } else {
          //方法出错了
        }
      })
    })
  })
  .catch(err => console.log(err))

//监听端口号
app.listen(3000, () => console.log('服务器启动成功了~'));