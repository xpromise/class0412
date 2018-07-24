//引入express
const express = require('express');
//引入path模块
const {resolve} = require('path');
//引入cookie-parser
const cookieParser = require('cookie-parser');
//引入集合对象
const Users = require('../models/Users');
//创建路由器对象
const router = express.Router();

//使用第三方中间件
router.use(cookieParser());
//用户登录
router.get('/login', (req, res) => {
  //返回login.html页面给用户
  // res.sendFile(resolve(__dirname, '../', 'public/login.html'));
  res.render('login', {errMsg: {}});
})

//用户注册
router.get('/regist', (req, res) => {
  //返回regist.html页面给用户
  // res.sendFile(resolve(__dirname, '../', 'public/regist.html'));
  res.render('regist', {errMsg: {}});
})

//个人中心
router.get('/userCenter', (req, res) => {
  //验证用户是否登录过
  const {user_id} = req.session;
  //判断是否有用户登录过
  if (user_id) {
    Users.findOne({_id: user_id}, (err, data) => {
      if (!err && data) {
        //方法没有出错并且找到了指定的用户
        res.render('userCenter', {user: {name: data.username}});
      } else {
        //方法出错了或者没有找到指定的用户
        res.redirect('/login');
      }
    })
  } else {
    //没有用户登录过，返回登录页面登录
    res.redirect('/login');
  }
  
})

//暴露出去
module.exports = router;