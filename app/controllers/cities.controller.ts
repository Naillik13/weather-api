import {CityResponse} from "../models/city.dto";

const request = require('request');

import CacheService from "../services/cache.service";

const ttl = 60 * 60 * 24;
const cache = new CacheService(ttl);

// Find a single city by n
exports.findByName = (req, res) => {
    cache.get('cities-' + req.query.name).then((cities) => {
        return res.send(cities);
    }).catch(() => {
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

                if (cities.length > 0) {
                    cache.set(req.query.name, cities)
                    return res.send(cities);
                }
                return res.status(404).send({
                    message: "Impossible de trouver une ville correspondante à ce nom."
                });
            }

            return res.status(500).send({
                message: "Une erreur est survenue."
            });
        });
    })

};
