//modulo soporta la lectura y escritura de archivos
const fs = require('fs');

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
        unique: true,
    },
    "author": {
        type: String,
        required: true,
        minlength: 1,
    },
    "img": {
        type: String,
        required: true,

    }
});

// asociamos asi una collection en la bbdd
let Books = mongoose.model('books', bookSchema);

// add documents
// first we create the contact
/*let book1 = new Books({
    title :"Q",
    author :"Luther Blissett",
    img : "0.jpg"
});*/
let book2 = new Books({
    title: "Love in times of anger",
    author: "Gabriel Garcia Marquez",
    img: "1.jpg"

});

// Usaremos una promesa de guardar para guardarla en la base de datos.
let b2 = book2.save().then(result => {
    console.log("book added:", result);
}).catch(error => {
    console.log("ERROR adding book:", error);
});

// debemos esperar a que finalicen todas las promesas, ya que son asincrónicas
// para cerrar la conexión a la base de datos, Promise.all permite consultar el
// promesas pasadas como parámetro para ver si han terminado:
Promise.all([b2]).then(values => {
    mongoose.connection.close();

});

fs.writeFileSync('libros.json', b2);





//1.-npm init
//2.-package.json poner start electron
//3.-npm install --save mongoose  or npm install mongoose
