//引入express
const express = require('express');
//创建应用对象
const app = express();
/*
  中间件：
    概念：中间件是一个函数，函数中包含着request、response、next三个参数。
    作用：
      1. 执行任何代码。
      2. 修改请求和响应对象。
      3. 终结请求-响应循环。
      4. 调用堆栈中的下一个中间件。
    应用：
      应用级中间件
        修改请求和响应对象，过滤非法的请求。。。。
      路由级中间件
      错误处理中间件
      内置中间件
      第三方中间件
 */

//应用级中间件
/*app.use((req, res, next) => {
  //中间件能够接受处理所有请求，默认只会自会处理
  //如果想要调用堆栈中的下一个中间件/路由，调用next()
  //一次请求过程中，所有中间件/路由共享同一个req、res对象
  console.log('中间件被调用了');
  // req.body = 123456;
  console.log(req.headers.referer);  //http://localhost:63342/class0412/day03/public/index.html?_ijt=pd9ps5nphajomuve4gsan4vqnm
  if (req.headers.referer !== 'http://127.0.0.1:63342/class0412/day03/public/index.html?_ijt=pd9ps5nphajomuve4gsan4vqnm') {
    res.send('error');
    return;
  }
  next();
})*/

function middleware(req, res, next) {
  //中间件能够接受处理所有请求，默认只会自会处理
  //如果想要调用堆栈中的下一个中间件/路由，调用next()
  //一次请求过程中，所有中间件/路由共享同一个req、res对象
  console.log('中间件被调用了');
  // req.body = 123456;
  console.log(req.headers.referer);  //http://localhost:63342/class0412/day03/public/index.html?_ijt=pd9ps5nphajomuve4gsan4vqnm
  if (req.headers.referer !== 'http://127.0.0.1:63342/class0412/day03/public/index.html?_ijt=pd9ps5nphajomuve4gsan4vqnm') {
    res.send('error');
    return;
  }
  next();
}

app.get('/', middleware, (req, res) => {
  console.log('路由1被调用了');
  console.log(req.body);  //undefined  123456
  res.send('这是路由返回的响应');
})

app.get('/', middleware, (req, res, next) => {
  console.log('路由2被调用了');
  console.log(req.body);  //undefined  123456
  res.send('这是路由返回的响应');
})


//监听端口号
app.listen(3000, () => console.log('服务器启动成功了~'));