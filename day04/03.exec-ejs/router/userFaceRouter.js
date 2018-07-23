//引入express
const express = require('express');
//引入path模块
const {resolve} = require('path');
//创建路由器对象
const router = express.Router();


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

//暴露出去
module.exports = router;