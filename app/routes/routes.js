const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../../swagger');
// import sub-routers
const api = require("./api");

let router = express.Router();

router.use('/api', api);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = router;