import {CityResponse} from "../models/city.dto";
import {DayWeather} from "../models/weather.dto";

const request = require('request');

import CacheService from "../services/cache.service";

const ttl = 60 * 60;
const cache = new CacheService(ttl);
// Find a single city by n
exports.findByLocation = (req, res) => {
    cache.get('weather-' + req.query.lat + '-' + req.query.lon).then((weather) => {
        return res.send(weather);
    }).catch(() => {
        if (!req.query.lat || !req.query.lon) {
            return res.status(400).send({
                message: "Les paramètres lat et lon sont obligatoires."
            });
        }

        request.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + req.query.lat + '&lon=' + req.query.lon + '&appid=' + process.env.WEATHER_API_KEY + '&exclude=hourly,minutely&units=metric', function (err, response, body) {
            if (!err && response.statusCode === 200) {
                const rawWeather = JSON.parse(body).daily;
                const weather: DayWeather[] = rawWeather.map(rawWeather => {
                    const date = new Date(rawWeather.dt * 1000);

                    return {
                        date: date,
                        icon: rawWeather.weather[0].icon,
                        temp: {
                            day: rawWeather.temp.day,
                            night: rawWeather.temp.night
                        },
                        pressure: rawWeather.pressure,
                        wind: rawWeather.wind_speed,
                        humidity: rawWeather.humidity
                    }
                });
                cache.set('weather-' + req.query.lat + '-' + req.query.lon, weather)

                return res.send(weather);
            }

            return res.status(500).send({
                message: "Une erreur est survenue"
            });
        })
    });
};
