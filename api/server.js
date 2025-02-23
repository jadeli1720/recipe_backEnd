const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

//Routers
const recipeRouter = require('../recipes/recipe-router')

//Server = express framework
const server = express();

//Server use...
server.use(helmet());
server.use(cors());
server.use(bodyParser.json());

//Server Routes
// server.use('/api', authRouter);
server.use('/api/recipes', recipeRouter)

//Api Host View
server.get('/', (req,res) => {
    res.status(200).json({api:"Server is up and running"})
})

module.exports = server
