import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'

const app: FastifyInstance = Fastify({})

require('./endpoints')(app)

const start = async () => {
  try {
    await app.listen(3000)

    const address = app.server.address()
    const port = typeof address === 'string' ? address : address?.port
    console.log('running on port 3000...')

  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()