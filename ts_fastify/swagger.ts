const swaggerAutogen = require('swagger-autogen')()
const doc = require('./docs/doc')

const outputFile = './docs/swagger_output.json'
const endpointsFiles = ['./endpoints.ts']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.ts')
})