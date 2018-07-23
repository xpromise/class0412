/*
  路由器：
    用来分类、管理路由和中间件的
 */
//引入express
const express = require('express');
//创建路由器对象
const router = express.Router();
//引入集合对象
const Users = require('../models/Users');
//引入sha1加密
const sha1 = require('sha1');
//node的核心库，专门用来处理路径问题的
const path = require('path')
//引入body-parser
const bodyParser = require('body-parser');

const usernameReg = /^[a-zA-Z0-9_]{5,12}$/;    //只能包含英文、数字和下划线，长度为5-12位。
const passwordReg = /^[a-zA-Z0-9_]{6,18}$/    //只能包含英文、数字和下划线，长度为6-18位。
const emailReg = /^[a-z0-9_]{5,18}@[a-z0-9_]{2,5}\.com$/

//第三方中间件
router.use(bodyParser.urlencoded({extended: true}));

//业务逻辑
//定义中间件函数
//验证用户填写的信息是否符合规范
function middleware(req, res, next) {
  const {username, password, rePassword, email, method} = req.body;
  // console.log(req.headers.referer);
  // console.log(method);
  //初始化错误对象
  res.errMsg = {
    username,
    email
  };
  // 2. 验证密码和确认密码是否一致
  if ((method === 'regist') && (password !== rePassword)) {
    //说明密码不一致，返回错误信息给用户
    res.errMsg.rePasswordErr = '两次输入密码不一致， 请重新输入';
  }
  // 3. 对用户名、密码、邮箱进行正则验证
  if (!usernameReg.test(username)) {
    //用户名不符合规范，返回错误信息给用户
    res.errMsg.usernameErr = '用户名需要包含英文、数字和下划线，长度为5-12位。';
  }
  if (!passwordReg.test(password)) {
    res.errMsg.passwordErr = '密码需要包含英文、数字和下划线，长度为6-18位。';
  }
  if ((method === 'regist') && !emailReg.test(email)) {
    res.errMsg.emailErr = '邮箱格式错误，请重新输入'
  }
  //调用下一个中间件
  next();
}

//登录路由
router.post('/login', middleware, (req, res) => {
  /*
    1. 获取用户提交的请求参数
    2. 对用户名、密码进行正则验证
    3. 去数据库中查找用户名和密码是否正确
    4. 返回登录成功
   */
  if (res.errMsg.usernameErr || res.errMsg.passwordErr) {
    //返回错误给用户
    res.render('login', {errMsg: res.errMsg});
    return ;
  }
  
  // 1. 获取用户提交的请求参数
  const {username, password} = req.body;
  // 2. 对用户名、密码进行正则验证
  // 3. 去数据库中查找用户名和密码是否正确
  Users.findOne({username, password: sha1(password)}, (err, data) => {
    if (!err) {
      //方法没有出错
      if (data) {
        //登录成功
        // 4. 返回登录成功
        res.send('登录成功');
      } else {
        //登录失败
        res.errMsg.loginErr = '用户名或密码错误';
        res.render('login', {errMsg: res.errMsg});
      }
    } else {
      res.errMsg.loginErr = '网络超时，请重新登录！';
      res.render('login', {errMsg: res.errMsg});
    }
  })
  
})

//注册路由
router.post('/regist', middleware, (req, res) => {
  /*
    1. 获取用户提交的请求参数
    2. 验证密码和确认密码是否一致
    3. 对用户名、密码、邮箱进行正则验证
    4. 去数据库中查找是否存在当前用户
    5. 保存数据在数据库中
   */
  if (res.errMsg.usernameErr || res.errMsg.passwordErr || res.errMsg.rePasswordErr || res.errMsg.emailErr) {
    //返回错误给用户
    res.render('regist', {errMsg: res.errMsg});
    return ;
  }
  
  // 1. 获取用户提交的请求参数
  const {username, password, email} = req.body;
  // 2. 验证密码和确认密码是否一致
  // 3. 对用户名、密码、邮箱进行正则验证
  // 4. 去数据库中查找是否存在当前用户
  Users.findOne({username}, (err, data) => {
    if (!err) {
      //方法没有出错
      if (data) {
        //说明用户名已存在
        res.errMsg.usernameErr = '用户名已存在，请重新输入';
        res.render('regist', {errMsg: res.errMsg});
      } else {
        //用户名不存在，可以保存
        // 5. 保存数据在数据库中
        Users.create({
          username,
          password: sha1(password),
          email
        }, err => {
          if (!err) res.redirect('/login');
        })
      }
    } else {
      //方法出错了
      res.errMsg.registErr = '网络超时，请重新输入';
      res.render('regist', {errMsg: res.errMsg});
    }
  })
})

//暴露出去
module.exports = router;