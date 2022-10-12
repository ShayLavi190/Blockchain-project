const http=require('http');
const {site} = require('../frontend/template.html');
const httpServer = http.createServer();
const PORT = 5000;
httpServer.listen(PORT);
