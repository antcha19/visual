const http =require('http');
const fs =require('fs');

var server= http.createServer(function(req,res){
    res.writeHead(200,{'Content-type': 'text/plain'});
    var mireadStream=fs.createReadStream('documentoread.txt');


mireadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');


