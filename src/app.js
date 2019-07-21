const Koa = require('koa')
const morgan = require('koa-morgan')
const helmet = require('koa-helmet')
const koaBody = require('koa-body')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router
  .get('/', async ctx => {
    ctx.body = 'Hello World'
  })
  .post('/hi', async ctx => {
    ctx.body = `Hi, ${ctx.request.body.name}`
  })
  .get('/this-is-json', async ctx => {
    ctx.body = {
      'this-is-key': 'this-is-value',
    }
  })

app
  .use(morgan('combined'))
  .use(helmet())
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = {
  app,
}
