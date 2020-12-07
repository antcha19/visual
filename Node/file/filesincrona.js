//manera sincrono
//modulo soporta la lectura y escritura de archivos
const fs = require('fs');

var leeme = fs.readFileSync('readme.txt', 'utf8');
console.log(leeme);
fs.writeFileSync('escribeme.txt', leeme);