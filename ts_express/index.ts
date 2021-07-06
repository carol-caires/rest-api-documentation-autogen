import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './docs/swagger_output.json';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

require('./endpoints')(app)