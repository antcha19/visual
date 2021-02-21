const fs = require("fs")
let salir = document.getElementById("idsalir");
let nueva = document.getElementById("nueva");

//leo el fichero
let fichero = fs.readFileSync('./peliculas.json')
//analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis
let peliparse = JSON.parse(fichero)

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//conexión
mongoose.connect('mongodb://localhost:27017/peliculas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('connected') })
    .catch((err) => { console.log('error') })



//esquema
let peliculasSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    director: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    portada: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true
    }
});

let variablePeliculas = mongoose.model('peliculas', peliculasSchema);
mostrartodos();

//inserto desde un json
let p1;
peliparse.forEach(peli => {
    let variablepeli = new Books();
    variablepeli.title = peli.title;
    variablepeli.director = peli.director;
    variablepeli.portada = peli.portada;
    p1 = pelicula.save().then(resultado => {
        console.log("boook is added", resultado);
    }).catch(error =>{
        console.log("error adding book")
    })
});

Promise.all([p1]).then(values => {
    mongoose.connection.close();
});


//insertar
document.getElementById("btnCargar").addEventListener('click', () => {
    let txtNuevoLibro = document.getElementById('txtNuevoLibro').value;
    let txtNuevoAutor = document.getElementById('txtNuevoAutor').value;
    let txtImagen = document.getElementById('txtImagen').value;

    //insertamos el libro
    let peliculas = new variablePeliculas({
        title: txtNuevoLibro,
        director: txtNuevoAutor,
        portada: txtImagen
    })
    let p1 = peliculas.save().then(result => {
        console.log("nueva peliculas insertada:", result);
    }).catch(error => {
        console.log("ERROR :", error);
    });
    //
   Promise.all([p1]).then(values => {
        mongoose.connection.close();
    });
})



//busqueda con find
function mostrartodos() {
    variablePeliculas.find().then(resultado => {
        let cadenaDOM = "";
        resultado.forEach(pelicula => {
            cadenaDOM +=
                `<div>
                    <table vertical>
                        <img src="./images/${pelicula.portada}" height="200" width="138">
                        <x-label><strong>${pelicula.title}</strong></x-label>
                        <x-label>${pelicula.director}</x-label>
                    </table>
                </div>`;
        });
        document.getElementById("wrapper").innerHTML = cadenaDOM;
    }).catch(error => {
        console.log("ERROR en find");
    });
}


//funcion salir
salir.addEventListener('click', (event) =>{
    close()
})






