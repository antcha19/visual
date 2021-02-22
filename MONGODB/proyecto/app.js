const fs = require("fs")
let salir = document.getElementById("idsalir");
let actualizarbbdd = document.getElementById("actualizar");

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
//modelo
let Peliculamodelo = mongoose.model('peliculas', peliculasSchema);
mostrartodos();

/*//inserto desde un json
let p1;
peliparse.forEach(peli => {
    let variablepeli = new Peliculamodelo();
    variablepeli.title = peli.title;
    variablepeli.director = peli.director;
    variablepeli.portada = peli.portada;
    p1 = pelicula.save().then(resultado => {
        console.log("boook is added", resultado);
    }).catch(error =>{
        console.log("error adding book")
    })
});
*/

//Promise.all([p1]).then(values => {
//   mongoose.connection.close();
//});


//insertar
document.getElementById("btnCargar").addEventListener('click', () => {
    let txtNuevapeli = document.getElementById('txtNuevapeli').value;
    let txtNuevoDirector = document.getElementById('txtNuevoDirector').value;
    let txtImagen = document.getElementById('txtImagen').value;

    //insertamos el libro
    let peliculas = new Peliculamodelo({
        title: txtNuevapeli,
        director: txtNuevoDirector,
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
    mostrartodos();
})



//busqueda con find
function mostrartodos() {
    Peliculamodelo.find().then(resultado => {
        let cadenaDOM = "";
        resultado.forEach(pelicula => {
            cadenaDOM +=
                `<div>
                    <table vertical>
                        <img src="./images/${pelicula.portada}" height="300" width="238">
                        <x-label><strong>${pelicula.title}</strong></x-label>
                        <x-label>${pelicula.director}</x-label>
                        <a href="./images/${pelicula.portada}"/>
                    </table>
                </div>`;
        });
        document.getElementById("wrapper").innerHTML = cadenaDOM;
    }).catch(error => {
        console.log("ERROR en find");
    });
}

//buscar por director
document.getElementById("btnBuscardirector").addEventListener('click', () => {
    let textdirector = document.getElementById('txtBuscarDirector').value;
    Peliculamodelo.find({ author: { $regex: '.*' + textdirector + '.*' } }).then(resultado => {
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
        console.log("error al buscar por el director")
    });

})

//borrar
//borrar
document.getElementById("btnborrar").addEventListener('click', () => {
    let txtBorrar = document.getElementById('txtborrar').value;
    
    Peliculamodelo.remove({title:txtBorrar}).then(result => {
         let notificacion = document.querySelector("#notification");
         notificacion.innerHTML = "Pelicula Borrada";
         notificacion.opened= true;
       
    }).catch(error => {
        let notificacion = document.querySelector("#notification");
         notificacion.innerHTML = "No se ha podido borrar";
         notificacion.opened= true;
    });
    mostrartodos();
})






//funcion salir
salir.addEventListener('click', (event) => {
    close()
})

//funcion actualizar
actualizarbbdd.addEventListener('click', (event) => {
    mostrartodos();
})





