const express = require('express');
const connectDB = require('./db/connection');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDefinition = YAML.load(path.resolve(__dirname, './swagger.yml'));
const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

const noteRoute = require('./routes/note.route');
app.use('/notes', noteRoute);



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})