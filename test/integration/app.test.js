const supertest = require('supertest')
const { app } = require('#/app')

const server = app.callback()
const request = supertest(server)

describe('routes', () => {
  it(' GET /', () => {
    return request.get('/').expect(200)
  })
  it(' POST /hi', () => {
    const name = 'hello world'
    return request
      .post('/hi')
      .send({ name })
      .expect(200)
      .expect(`Hi, ${name}`)
  })
  it(' GET /this-is-json', () => {
    return request
      .get('/this-is-json')
      .expect(200)
      .expect({
        'this-is-key': 'this-is-value',
      })
  })
})
