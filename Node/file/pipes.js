const fs = require('fs');



//En esta variable miStream, se almacenarían los bits del archivo que se han almacenado en el búfer.
//utf8 es para que me nuestro el texto
var mireadStream=fs.createReadStream('documentoread.txt','utf8');
var miescrituraStream = fs.createWriteStream('documentocopia.txt');

mireadStream.pipe(miescrituraStream);


//Hay una forma aún más rápida de hacerlo: tuberías. de escriturastream.js