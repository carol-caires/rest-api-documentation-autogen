import { FastifyInstance } from 'fastify'
module.exports = function (app: FastifyInstance) {

  app.register(require('fastify-swagger'), {
    mode: 'static',
    specification: {
      path: './docs/swagger_output.json'
    },
    exposeRoute: true
  })
  app.get('/ping', {}, async (request: any, reply: any) => {
    const filter = request.query.filter
    return { pong: 'it worked!' }
  })

  app.post('/user', {}, async (request: any, reply: any) => {
    const name = request.query.name
    const city = request.query.city
    return { pong: 'added a new user' }
  })
}