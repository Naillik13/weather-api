module.exports = (router) => {
    const cities = require('../controllers/cities.controller');

    /**
     * @swagger
     * /api/cities:
     *    get:
     *      tags:
     *          - Cities
     *      summary: This should return cities coordinates.
     *      parameters:
     *         - in: query
     *           name: name
     *           schema:
     *           type: string
     *           required: true
     *           description: Name of the cities to get
     *      consumes:
     *        - application/json
     *      responses:
     *        200:
     *          description: Receive cities details.
     *          schema:
     *            type: object
     *            $ref: '#/definitions/CityResponse'
     */
    router.get('/cities', cities.findByName);

    return router;
};