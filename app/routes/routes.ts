module.exports = (router) => {
    const swaggerUi = require('swagger-ui-express');
    const swaggerDoc = require('../../swagger');

    // import sub-routers
    const api = require("./api")(router);

    router.use('/api', api);

    router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    return router;
}

