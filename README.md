Weather API
===

API de l'application météo.

## Overview

Cette API Node utilise express.

## Pré-requis

- NodeJS v16.13
- Fichier .env basé sur le .env-example

## Liens utiles

- [l'api en local](http://localhost:3000)
- [swagger](http://localhost:3000/api-docs)

Livrable
---

Temps passé : 1h30

J'ai utilisé les principes d'une architecture REST pour réaliser mon api.

La base de  l'api est divisé en deux :
- [/api](http://localhost:3000/api) (La racine de l'api)
- [/api-docs](http://localhost:3000/api-docs) (La documentation de l'api)

Cette api contient deux endpoints :
- [/api/cities?name=paris](http://localhost:3000/api/cities?name=paris) (Retournant une liste de ville en fonction d'un nom)
- [/api/weather?lon=2.3200410217200766&lat=48.8588897](http://localhost:3000/api/weather?lon=2.3200410217200766&lat=48.8588897) (Retournant le météo sur les 7 prochains jours pour un endroit donné)

Packages utilisé :
- Morgan pour le logging des accès http
- Swagger pour la documentation de l'api
- Nodemon pour le redémarrage automatique de mon application pendant le dev
- Typescript
- Node cache pour le cache de mes réponses
- Request pour effectuer des requêtes vers l'api openweather

J'ai voulu rajouter une route permettant de récupérer la photo d'une localisation, mais la seule api que j'ai trouvé est est l'api Places de Google qui consiste en deux étapes,
la récupération de l'identifiant de la photo via un premier endpoint, puis la photo via un deuxième endpoint. J'ai trouvé à mon sens ça légèrement overkill, et par manque de temps je ne me suis pas penché dessus.

Niveau architecture du projets, il y a des :
- Routes
- Controllers
- "Models", ici uniquement des dto
- Services

Les routes, controllers et models sont segmentés par type de ressource (weather/city).  
Le service de cache quant à lui est très basique et pas forcément justifié dans ce contexte là, mais dans mes développement personnels, je réalise tout le temps un service dédié me permettant d'intéragir avec mon cache.
