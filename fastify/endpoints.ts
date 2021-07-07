import { FastifyInstance, RequestGenericInterface } from 'fastify'
export default async (app: FastifyInstance) => {

  // expose API documentation through endpoint /doc
  app.register(require('fastify-swagger'), {
    mode: 'static',
    specification: {
      path: './docs/swagger_output.json'
    },
    exposeRoute: true,
    routePrefix: '/doc'
  })

  interface requestGeneric extends RequestGenericInterface {
    Querystring: {
      name: string
    }
  }

  // #swagger.start
  app.get<requestGeneric>('/ping', async (request, _reply) => {
    /*
          #swagger.path = '/ping'
          #swagger.method = 'get'
          #swagger.description = 'Makes a ping request'
          #swagger.tags = ['Ping']
          #swagger.produces = ['application/json']
      */

    /* #swagger.parameters['name'] = {
      description: 'Your name',
      type: 'string'
    } */
    const name = request.query.name
    return { pong: 'it worked! '+name }
  })
  // #swagger.end

  app.post('/user', async (request: any, _reply) => {
    const name = request.query.name
    const city = request.query.city
    return { pong: 'added a new user' }
  })
}