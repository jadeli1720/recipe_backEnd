const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

//Routers

//Server = express framework
const server = express();

//Server use...
server.use(helmet());
server.use(cors());
server.use(bodyParser.json());

//Server Routes

//Api Host View
server.get('/', (req,res) => {
    res.status(200).json({api:"Server is up and running"})
})

module.exports = server
