const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'));

app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send("var str = '这是服务器返回的ajax的响应'");
})

app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send('这是服务器返回的ajax的响应');
})

app.get('/jsonp', (req, res) => {
  //获取请求参数
  const {callback} = req.query
  //去数据库查找对应数据
  const data = [{name: 'tom', age: 18}, {name: 'jerry', age: 20}];
  
  res.send(callback + '(' + JSON.stringify(data) + ')');
  // "getData('[{name: 'tom', age: 18}, {name: 'jerry', age: 20}]')"
})

app.get('/cors', (req, res) => {
  //设置响应头
  // res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
  res.send('这是cors返回的响应');
})


app.listen(3000, () => console.log('服务器启动成功了'));