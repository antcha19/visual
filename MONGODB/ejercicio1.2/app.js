
let todos = document.getElementById("txtTodos");

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//conexión
mongoose.connect('mongodb://localhost:27017/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//esquema
let librosSchema = new mongoose.Schema({
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

//insertar


//modelo
let Libro = mongoose.model('books', librosSchema);

//insertar
document.getElementById("btnCargar").addEventListener('click', () => {
    let txtNuevoLibro = document.getElementById('txtNuevoLibro').value;
    let txtNuevoAutor = document.getElementById('txtNuevoAutor').value;
    let txtImagen = document.getElementById('txtImagen').value;

    //insertamos el libro
    let libro = new Libro({
        title: txtNuevoLibro,
        author: txtNuevoAutor,
        img: txtImagen
    })
    let p1 = libro.save().then(result => {
        console.log("book added:", result);
    }).catch(error => {
        console.log("ERROR adding libro:", error);
    });
    //
    Promise.all([p1]).then(values => {
        mongoose.connection.close();
    });
})




//busqueda con find
let p1 = Libro.find().then(resultado => {
    let cadenaDOM = "";
    resultado.forEach(book => {
        cadenaDOM +=
            `<div>
                <x-box vertical>
                    <img src="./images/${book.img}" height="170" width="108">
                    <x-label><strong>${book.title}</strong></x-label>
                    <x-label>${book.author}</x-label>
                </x-box>
            </div>`;
    });
    document.getElementById("wrapper").innerHTML = cadenaDOM;
}).catch(error => {
    console.log("ERROR en find");
});
//buscar por libro
document.getElementById("btnBuscar").addEventListener('click', () => {
    let txtBuscar = document.getElementById('txtBuscar').value;
    Libro.find({ title: { $regex: '.*' + txtBuscar + '.*' } }).then(resultado => {
        let cadenaDOM = "";
        resultado.forEach(book => {
            cadenaDOM +=
                `<div>
                    <x-box vertical>
                        <img src="./images/${book.img}" height="170" width="108">
                        <x-label><strong>${book.title}</strong></x-label>
                        <x-label>${book.author}</x-label>
                    </x-box>
                </div>`;
        });
        document.getElementById("wrapper").innerHTML = cadenaDOM;
    }).catch(error => {
        console.log("ERROR en find");
    });
})

//buscar todos
todos.addEventListener('click', () => {
    Libro.find().then(resultado => {
        let cadenaDOM = "";
        resultado.forEach(book => {
            cadenaDOM +=
                `<div>
                    <x-box vertical>
                        <img src="./images/${book.img}" height="170" width="108">
                        <x-label><strong>${book.title}</strong></x-label>
                        <x-label>${book.author}</x-label>
                    </x-box>
                </div>`;
        });
        document.getElementById("wrapper").innerHTML = cadenaDOM;
    }).catch(error => {
        console.log("ERROR en find");
    })
})


///author
document.getElementById("btnBuscar1").addEventListener('click', () => {
    let txtAutor = document.getElementById('txtAutor').value;
    Libro.find({ author: { $regex: '.*' + txtAutor + '.*' } }).then(resultado => {
        let cadenaDOM = "";
        resultado.forEach(book => {
            cadenaDOM +=
                `<div>
                    <x-box vertical>
                        <img src="./images/${book.img}" height="170" width="108">
                        <x-label><strong>${book.title}</strong></x-label>
                        <x-label>${book.author}</x-label>
                    </x-box>
                </div>`;
        });
        document.getElementById("wrapper").innerHTML = cadenaDOM;
    }).catch(error => {
        console.log("ERROR en find");
    });
})

