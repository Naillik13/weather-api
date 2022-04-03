module.exports = (router) => {
    require('./cities.routes')(router);
    require('./weather.routes')(router);

    return router;
}