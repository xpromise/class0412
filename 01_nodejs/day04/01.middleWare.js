//引入express
const express = require('express');
//引入body-parser
const bodyParser = require('body-parser');
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
        路由器
      错误处理中间件
        处理服务器产生的错误的
      内置中间件
        express框架封装好的中间件函数，express.static('public')
        服务器的内容默认对外是不可见的
        用来暴露服务器静态资源
      第三方中间件
        其他程序员开发好了的中间件，拿来即用
        通常用来处理修改请求和响应对象，body-parser cookie-parser
      
   当服务器运行时，会将所有的中间件和路由都会被添加到一个数组中
 */

//内置中间件
app.use(express.static('public'));
// console.log(express.static('public').toString());
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

//第三方中间件
//解析请求体，将解析后的结果挂载到req.body上
app.use(bodyParser.urlencoded({extended: true}));

app.post('/test1', (req, res, next) => {
  console.log(req.query);  // {}
  console.log(req.body);   // undefined  { username: 'sunwukong', password: '123123' }
  console.log(req.params); // {}
  res.send('这是post路由返回的响应');
})

app.get('/test1', (req, res, next) => {
  res.send('这是get路由返回的响应');
})

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
  res.send('这是get路由返回的响应');
})

//错误处理中间件
app.get('/test', (req, res) => {
  console.log('/test路由被调用了');
  throw('方法出错了~error');
})

app.use((err, req, res, next) => {
  //必须写满四个参数，才能当做错误处理中间件
  console.log(err); //'方法出错了~error'
  res.send(err);
})

//监听端口号
app.listen(3000, () => console.log('服务器启动成功了~'));