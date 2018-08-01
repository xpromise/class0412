const express = require('express');
//引入cookie-parser
const cookieParser = require('cookie-parser');
const app = express();
//使用第三方中间件
//将请求头中的cookie解析为对象，挂载到req.cookies上
app.use(cookieParser());

app.get('/cookie01', (req, res, next) => {
  /*
    cookie
      头： 响应头/请求头
   */
  //设置cookie
  res.cookie('username', 'sunwukong', {maxAge: 1000 * 3600 * 24 * 7});
  res.send('这是cookie01的响应');
})

app.get('/cookie02', (req, res, next) => {
  // console.log(req.headers);
  //获取cookie
  console.log(req.cookies);
  /*
  { 'Webstorm-129da853': '8726c2d8-3b88-48b8-8db0-dd82e62fb79a',
  username: 'sunwukong' }
   */
  res.send('这是cookie02的响应');
})

app.get('/cookie03', (req, res, next) => {
  //删除cookie
  // res.clearCookie('username');
  // res.cookie('username', 'xxxxxxx', {maxAge: 0});
  //修改cookie
  res.cookie('username', 'zhubajie', {maxAge: 1000 * 3600 * 24 * 7});
  res.send('这是cookie03的响应');
})


app.listen(3000, () => console.log('服务器启动成功了~'))