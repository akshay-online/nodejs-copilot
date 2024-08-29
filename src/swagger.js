const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Conference Registration API',
      version: '1.0.0',
      description: 'APIs for conference registration',
    },
  },
  apis: ['./src/routes/*.js'], // files containing annotations as above
};

const specs = swaggerJsDoc(options);

module.exports = specs;