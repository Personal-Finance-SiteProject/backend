const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


// Metadata info about our API
const swaggerDefinition = {
    definition: {
        openapi: "3.0.0",
        info: { title: 'Personal Finance APP', version: '1.0.0' },
    },
    apis: ['api/routes/index.tsx', 'db/index.tsx']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUI, swaggerUI.setup(swaggerSpec));
    app.get('/api/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec)
    })
}

