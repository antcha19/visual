const fs = require('fs'); 
//escritura
var mireadStream=fs.createReadStream('documentoread.txt','utf8');
var milescrituraStream = fs.createWriteStream('documentocopia.txt');
mireadStream.on('data', function (chunk) {
    console.log('nuevo trozo recibido');
    console.log(chunk);
});