const fs = require('fs');
//En esta variable miStream, se almacenarían los bits del archivo que se han almacenado en el búfer.
//utf8 es para que me nuestro el texto
//var mireadStream=fs.createReadStream('documentoread.txt','utf8');

// Para controlar el tamaño del búfer, por ejemplo, 1 bytes
var mireadStream = fs.createReadStream('documentoread.txt', { highWaterMark: 1 });
mireadStream.on('data', function (chunk) {
    console.log('nuevo trozo recibido');
    console.log(chunk);
});


