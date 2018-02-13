master<br>
[![Build Status](https://travis-ci.org/abedurftig/tdb-app.svg?branch=master)](https://travis-ci.org/abedurftig/tdb-service)

develop<br>
[![Build Status](https://travis-ci.org/abedurftig/tdb-app.svg?branch=develop)](https://travis-ci.org/abedurftig/tdb-service)

### Test Dashboard App

This is a client app implementation for the [Test Dashboard Service](https://github.com/abedurftig/tdb-service).

The client allows to set up an account with an user. The user can create projects and dashboards. Projects render the test results which have been uploaded via the service. The test runs are displayed in a diagram which show the number of tests run each time. The digram also shows the number of failed, passed and skipped tests.

#### Installation

This project uses [`poi`](https://poi.js.org) as bundler. It it also used to build the production build. To run the development server just run.

```javascript
yarn install && npm run dev
```

This is run the application in `development` mode and hot modul replacement is activated. For local development you will have to specify the `API_URL` for a backend service (see the `env.js` file).

#### Build

Internally `poi` is used to create the production build. For convience run the `npm` script provided.

```
npm run build:prod
```
This is step is a prerequisite to the next steps.

#### Deployment

This application is currently deployed to Heroku. For this deployment from Travis the `deployment/to_heroku.sh` is used. A `Procfile` is not required, instead the [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static) is used.

#### Docker

A `Dockerfile` is provided. The image uses `nginx`.

Build a Docker image.

```
docker build -t tdb-app:0.0.1 .
```

Run a container. On startup the `API_URL` for the backend service has to be provided. It will then be injected in the `env.js` file.

```
docker run -e API_URL='http://localhost:9876/api' -P -d tdb-app:0.0.1
```

#### Thanks

- ReactJS
- poijs
- yarn
- npm
- Semantic UI React
- Chartjs 2 (react-chartjs-2)
