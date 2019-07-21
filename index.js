const Koa = require('koa')
const morgan = require('koa-morgan')
const koaBody = require('koa-body')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router
  .get('/', async (ctx, next) => {
    // ctx.router available
    ctx.body = 'Hello World'
  })
  .all('/reqBody', async (ctx, next) => {
    // ctx.router available
    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`
  })
  .get('/something', async (ctx, next) => {
    ctx.body = {
      something: 'something here',
    }
  })

app
  .use(morgan('combined'))
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
