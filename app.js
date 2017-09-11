const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const router = require('./routes');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});

app.use(async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;
  console.log(`Time: ${ms}ms`);
})

app.use(
  views(path.join(__dirname, './views'),
  {
    extension: 'ejs'
  }
));

app.use(
  router.routes(),
  router.allowedMethods()
);

app.listen(3001);
console.log('app started at port http://localhost:3001');
