//引入express
const express = require('express');
//创建应用对象
/*
  全局唯一的，express提供的属性和方法大部分都在app上
 */
const app = express();
/*
  http://localhost:3000/test
  http://127.0.0.1:3000/test
  http://192.168.24.75:3000/test
  协议名://域名或者ip地址:端口号/请求路径
  
  ip地址：在互联网中为每一台连接上的设备分配一个地址 192.168.0.115
  域名：简化ip地址
    通过DNS解析可以将域名解析为ip地址
    
  默认端口号：
    http   80
    https  443
  默认资源名
    index.html
 */

//设置路由
app.get('/', (request, response) => {
  /*
    get: 请求方式
    '/test': 请求路径   http://localhost:3000/test
    request: 请求信息
    response: 响应信息
  */
  //获取请求参数
  const query = request.query;
  console.log(query); //{ usename: 'sunwukong', password: '123123' }
  //返回响应
  response.send('<h1>这是express服务器返回的响应</h1>');
})

app.post('/', (request, response) => {
  
  /*
    get: 请求方式
    '/test': 请求路径   http://localhost:3000/test
    request: 请求信息
    response: 响应信息
  */
  //获取请求参数
  // const query = request.query;
  // console.log(query); //{ usename: 'sunwukong', password: '123123' }
  //返回响应
  response.send('<h1>这是express服务器返回的响应</h1>');
})

//监听端口号，开启服务
app.listen(80, () => console.log('服务器启动成功了'));