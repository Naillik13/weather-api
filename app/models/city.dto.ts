/**
 * @swagger
 *
 * definitions:
 *   CityResponse:
 *     type: object
 *     properties:
 *       name:
 *          type: string
 *       lat:
 *          type: number
 *       long:
 *          type: number
 */
export interface CityResponse {
    name: String,
    lat: Number,
    lon: Number
}