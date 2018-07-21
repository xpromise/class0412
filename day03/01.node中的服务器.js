//引入http核心模块
const http = require('http');
//引入querystring模块
const querystring = require('querystring');
//创建服务
const server = http.createServer((request, response) => {
  /*
    request / req 请求信息
    response / res 响应信息
   */
  //获取请求参数
  let query = request.url;
  console.log(query);  //   /?usename=sunwukong&password=123123
  query = query.split('?')[1];
  console.log(query);  //  usename=sunwukong&password=123123
  console.log(querystring.parse(query));  // { usename: 'sunwukong', password: '123123' }
  //设置响应头
  response.setHeader('Content-Type', 'text/html;charset=utf8');
  //返回响应
  response.end('<h1>这是node服务器返回的响应</h1>');
})

//监听端口号
server.listen(3000, () => console.log('服务器启动成功了~~'));