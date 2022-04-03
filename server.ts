require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./app/routes/routes')(express.Router());

app.use('/', routes);

// listen for requests
let listener = app.listen(port, () => {
    console.log("Server is listening on port "  + port);
    console.log("API is available on " + listener.address().address + "/api/");
    console.log("Swagger is available on " + listener.address().address + "/api-docs")
});