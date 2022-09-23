const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const cors = require("koa-cors");
const router = new Router();

router.get("/", async (ctx) => {
  const name = ctx.query.name || "stranger";
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
  ctx.redirect("http://localhost:8849/otherPage.html");
});

app.use(cors({
  origin: '*'
})).use(router.routes()).listen(8848);
// https://blog.lishunyang.com/2020/06/redirect.html
