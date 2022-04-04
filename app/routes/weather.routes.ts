module.exports = (router) => {
    const weather = require('../controllers/weather.controller');

    /**
     * @swagger
     * /api/weather:
     *    get:
     *      tags:
     *          - Weather
     *      summary: This should return weather for specific coordinates.
     *      parameters:
     *         - in: query
     *           name: lon
     *           schema:
     *           type: number
     *           required: true
     *           description: Longitude
     *         - in: query
     *           name: lat
     *           schema:
     *           type: number
     *           required: true
     *           description: Latitude
     *      consumes:
     *        - application/json
     *      responses:
     *        200:
     *          description: Receive weather details.
     *          schema:
     *            type: array
     *            items:
     *              type: object
     *              $ref: '#/definitions/DayWeather'
     *        400:
     *          description: Malformed request.
     *          schema:
     *            type: object
     *            properties:
     *              message:
     *                type: string
     *        500:
     *          description: Internal error.
     *          schema:
     *            type: object
     *            properties:
     *              message:
     *                type: string
     */
    router.get('/weather', weather.findByLocation);

    return router;
};