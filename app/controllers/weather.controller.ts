import {CityResponse} from "../models/city.dto";
import {DayWeather} from "../models/weather.dto";

const request = require('request');
// Find a single city by n
exports.findByLocation = (req, res) => {
    request.get('https://api.openweathermap.org/data/2.5/onecall?lat='+req.query.lat+'&lon='+req.query.lon+'&appid='+process.env.WEATHER_API_KEY+'&exclude=hourly,minutely&units=metric', function(err, response, body) {
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
            return res.send(weather);
        }
    });
};
