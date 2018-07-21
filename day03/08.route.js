//引入express
const express = require('express');
//创建应用对象
const app = express();
//定义路由
/*
  路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成
    HTTP 请求（GET、POST等）  请求方式
    URI  请求地址path
    若干个句柄 回调函数（中间件函数）
    
  作用：
    接受请求
    处理请求
    返回响应
 */
app.get('/', (req, res) => {
  /*
    req 请求信息
      req.get()  获取请求头的信息
      req.params 获取请求路径中的参数
      req.query  获取查询字符串
      req.headers 获取全部的请求头
    res 响应信息
      res.download(路径)  返回响应，提供了一个文件给客户端，客户端会自动下载
      res.sendFile(绝对路径)  返回响应，提供了一个文件给客户端，客户端直接显示
      
      res.end()   快速响应，通常都是没有内容的响应
      res.send()  返回响应，能够根据响应的内容自动添加响应头
      res.json()  返回响应，将响应内容转化json字符串
      res.redirect() 返回响应，请求重定向到新的地址, 默认状态码为302
      res.status()  设置响应状态码
      
      res.get()   获取响应头的信息
      res.set()   设置响应头的信息
      
   */
  
  //console.log(req.headers);
  //console.log(req.query);  //{ usename: 'sunwokong' }
  //console.log(req.get('accept'));  //text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
  
  // res.send('test');
  // res.download('./public/index.html');
  // res.sendFile(__dirname + '/public/index.html');
  
  // res.status(500).json({name: 'jack', age: 18});
  
  res.set('Content-Type', 'text/html;charset=utf8');
  console.log(res.get('Content-Type'));
  res.end();
  // res.redirect('http://www.atguigu.com');
})

app.get('/test/123', (req, res) => {
  res.send('hello express');
})

app.get('/food/:id', (req, res) => {
  console.log(req.params);  //{ id: '123456' }
  res.send('hello express');
})

app.get(/\/shop\/(\d+)/, (req, res) => {
  console.log(req.params);  //{ '0': '789456' }
  res.send('hello express');
})

//监听端口号
app.listen(3000, () => console.log('服务器启动成功了~'));