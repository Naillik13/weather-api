import {CityResponse} from "../models/city.dto";

const request = require('request');
// Find a single city by n
exports.findByName = (req, res) => {
    request.get('http://api.openweathermap.org/geo/1.0/direct?q='+req.query.name+'&appid='+process.env.WEATHER_API_KEY, function(err, response, body) {
        if (!err && response.statusCode === 200) {
            const rawCities = JSON.parse(body);
            const cities : CityResponse[] = rawCities.map(rawCity => {
                return {
                    name: rawCity.name,
                    lat: rawCity.lat,
                    lon: rawCity.lon
                }
            });
            return res.send(cities);
        }
    });
};
