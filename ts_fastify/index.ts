import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'


const server: FastifyInstance = Fastify({})

server.get('/ping', {}, async (request, reply) => {
  return { pong: 'it worked!' }
})

const start = async () => {
  try {
    await server.listen(3000)

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port
    console.log('running...')

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()