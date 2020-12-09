//borra el archivo y el txt
const fs = require('fs');

fs.unlink('./stuff/escribeme.txt', function(){
    fs.rmdir('stuff',function(err){
        if(err){
            throw err+ 'borrando carpeta stuff';
        }
    });
},function(err){
    if(err){
        throw err+ 'borrando archivo stuff/writeme.txt';
    }

});