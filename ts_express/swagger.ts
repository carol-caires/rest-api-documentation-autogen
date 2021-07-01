const swaggerAutogen = require('swagger-autogen')()

const outputFile = './docs/swagger_output.json'
const endpointsFiles = ['./endpoints.ts']

swaggerAutogen(outputFile, endpointsFiles)