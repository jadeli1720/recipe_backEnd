require('dotenv').config();

const server = require('./api/server.js');
const defaults = require('./config/default.js');

const port = defaults.port;

server.listen(port, () => console.log(`\n** Server is up on port ${port} **\n`))

//config\defualt.js