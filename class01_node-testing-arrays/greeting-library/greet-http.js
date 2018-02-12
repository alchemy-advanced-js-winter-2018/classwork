const http = require('http');
const url = require('url');
const greet = require('./lib/greet');


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const greeting = greet(parsedUrl.query.name);
    res.end(greeting);
});

server.listen(8080);