//creamos el servidor http
const http=require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('hola clase');
});

server.listen(3001,'127.0.0.1');