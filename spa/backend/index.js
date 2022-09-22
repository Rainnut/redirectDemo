const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();

router.get('/', async ctx => {
  const name = ctx.query.name || 'stranger';
  ctx.body = {
    message: `Hello, ${name}!`,
  };
});

router.get("/main", async (ctx) => {
  const name = ctx.query.name || "main";
  ctx.body = {
    message: `Hello, ${name}!`,
  };
});

router.get("/redirect", async (ctx) => {
  const name = ctx.query.name || "main";
  ctx.redirect('/main')
});

app.use(router.routes()).listen(8848);
// https://blog.lishunyang.com/2020/06/redirect.html
