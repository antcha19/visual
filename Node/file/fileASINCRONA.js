//manera Asincrono
//modulo soporta la lectura y escritura de archivos
const fs = require('fs');

var leeme = fs.readFileSync('./readme.txt', 'utf8',(err, data)=>{
    if(err) throw err;
    console.log('leyendo file asincrona');
    console.log(data);
    fs.writeFile('./escribeme.txt',data,(err)=>{
        if(err)throw err;
        err
        ? console.log(err)
        : console.log('File se ha escrito correctamente');
    })
});
