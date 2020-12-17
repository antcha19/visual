const fs = require('fs');


var datos;

function readfile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./readme.txt', 'utf8', (err, data) => {
            datos = data;
            if (err) throw err;
            console.log('Reading asynchronous file');
            resolve(datos);
        });
    });
}
function writefile() {
    return new Promise((resolve, reject) => {
        fs.writeFile('./escribeme.txt', datos, (err) => {
            if (err) throw err;
            err
                ? console.log(err)
                : console.log('File written correctly');
        });
    });
}

readfile()
    .then((result) => {
        console.log(result);
        writefile();
    })