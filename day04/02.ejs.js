const express = require('express');
const app = express();
/*
  ejs ： 高效的js模板引擎
    1. 配置模板资源目录
      app.set('views', '模板资源目录')
    2. 配置使用哪种模板引擎
      app.set('view engine', '模板引擎');
 */
// 配置模板资源目录
app.set('views', './views');
// 配置使用哪种模板引擎
app.set('view engine', 'ejs');

app.get('/ejs', (req, res) => {
  const {username} = req.query;
  
  const data = {
    username: '<p>' + username + '</p>'
  }
  //将数据渲染到指定的模板资源上
  //第二个参数是一个对象，在对象中添加想要的数据
  res.render('index', {data});
})

app.listen(3000, () => console.log('服务器启动成功了~'))