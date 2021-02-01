const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//conexión
mongoose.connect('mongodb://localhost:27017/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//esquema
let bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    author: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    img: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true
    }
});

//modelo
let Books = mongoose.model('books', bookSchema);

//busqueda con find
let p1 = Books.find().then(resultado => {
    inicio(resultado);
}).catch(error => {
    console.log("ERROR en find");
});

const inicio = (books => {
    let cadenaDOM = "";
    books.forEach(book => {
        cadenaDOM +=
            `<div>
                <x-box vertical>
                    <img src="./images/${book.img}" height="170" width="108">
                    <x-label><strong>${book.title}</strong></x-label>
                    <x-label>${book.author}</x-label>
                </x-box>
            </div>`;
    });
    document.getElementById("wrapper").innerHTML = cadenaDOM;
});