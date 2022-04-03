/**
 * @swagger
 *
 * definitions:
 *   DayWeather:
 *     type: object
 *     properties:
 *       date:
 *          type: string
 *       icon:
 *          type: string
 *       pressure:
 *          type: number
 *       humidity:
 *          type: number
 *       wind:
 *          type: number
 *       temp:
 *          type: object
 *          properties:
 *            day:
 *              type: number
 *            night:
 *              type: number
 */
export interface DayWeather {
    date: Date,
    icon: String,
    temp: {
        day: Number,
        night: Number
    },
    pressure: Number,
    wind: Number,
    humidity: Number
}