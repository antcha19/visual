const fs = require('fs');

fs.rename('readme.txt', 'leeme.txt',(err)=>{
    if(err) throw err;
    console.log('nombre editado satisfactoriamente');
});