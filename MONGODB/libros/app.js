const fs = require("fs")

//leo el fichero
let fichero = fs.readFileSync('./books.json')
//analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis
let librosparse = JSON.parse(fichero)

// we load moongose
const mongoose = require('mongoose');
// establecemos el motor de promesa predeterminado en javascript
// esto es necesario porque mongo admite diferentes tipos de promesas
mongoose.Promise = global.Promise;
// connect with the contacts DB
const url1 = 'mongodb://localhost:27017/books'

mongoose.connect(url1, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('bd conectada')
}).catch((err) => {
    console.log('errror en la conexion de la bbdd')
})


//bbdd
let bookSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    "author": {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    "img": {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
});

// asociamos asi una collection en la bbdd
let Books = mongoose.model('books', bookSchema);

let p1;
librosparse.forEach(books => {
    let variablelibro = new Books();
    variablelibro.title = books.title;
    variablelibro.author = books.author;
    variablelibro.img = books.img;
    p1 = libro.save().then(resultado => {
        console.log("boook is added", resultado);
    }).catch(error =>{
        console.log("error adding book")
    })
});

Promise.all([p1]).then(values => {
    mongoose.connection.close();
});



//1.-npm init
//2.-package.json poner start electron
//3.-npm install --save mongoose  or npm install mongoose
