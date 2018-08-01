/*
  koa: 基于nodejs下一代服务器框架
    有express原班人马打造的，致力于更小、更富有表现力、更健壮的开发框架。
 */
//引入koa
const Koa = require('koa');
//引入koa-route
const _ = require('koa-route');
//引入koa-router
const Router = require('koa-router');
//创建应用对象
const app = new Koa();
//创建路由器对象
const router = new Router();

//使用路由器
router.get('/goods/:id', ctx => {
  console.log(ctx.path);
  ctx.body = '这是goods路由返回的响应';
})

router.use(ctx => {
  ctx.body = '这是根路由返回的响应';
})

//应用路由器
app
  .use(router.routes())
  .use(router.allowedMethods());

//设置路由
app.use(_.get('/food/:id', ctx => {
  console.log(ctx.path);  //  /food/123456
  console.log(ctx.href);  // http://localhost:3000/food/123456
  console.log(ctx.origin);  //  http://localhost:3000
  console.log(ctx.originalUrl); // /food/123456
  ctx.body = '这是food路由返回的响应'
}))

//设置中间件
app.use(async (ctx, next) => {
  console.log(ctx.query);
  // console.log(ctx.querystring);
  //返回响应
  ctx.body = 'koa服务器的响应';
})

//监听端口号
app.listen(3000, () => console.log('服务器启动成功了~'))