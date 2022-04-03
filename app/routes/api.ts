module.exports = (router) => {
    require('./cities.routes')(router);

    return router;
}