//引入express
const express = require('express');
//创建应用对象
const app = express();

//设置路由
app.get('/', (request, response) => {
  //获取请求参数
  const query = request.query;
  console.log(query); //{ usename: 'sunwukong', password: '123123' }
  //返回响应
  response.send('<h1>这是express服务器返回的响应</h1>');
})

//监听端口号
app.listen(3000, () => console.log('服务器启动成功了'));