import * as Koa from 'koa';
import * as Router from 'koa-router';

let app  = new Koa();
let router = new Router();

app.use(async (ctx :Koa.Context, next: Function) => {
    console.log(`Url: ${ctx.url}`);
    await next();
});

router.get('/', async (ctx: Koa.Context, next: Function) => {
    ctx.body = JSON.stringify({status: 'everything is borken'});
});

app.use(router.routes());

app.listen(4200);

module.exports = app;