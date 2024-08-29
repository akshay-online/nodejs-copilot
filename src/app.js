const express = require('express');
const conferenceRoutes = require('./routes/conferenceRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/conferences', conferenceRoutes);
app.use('/registrations', registrationRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});