const http=require('http');
const fs=require('fs');


//lee clientes del fichero
let fichero = fs.readFileSync('./clients.json');

http.createServer(function (req,res){
 res.writeHead(200, {'Content-type': 'application/json'});
 res.end(fichero);

}).listen(3000,"127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/')

