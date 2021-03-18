const fs = require("fs")

let salir = document.getElementById("idsalir");
let PaginaProductos = document.getElementById("paginaproductos");
let PaginaClientes = document.getElementById("paginaclientes");
let PaginaCompra = document.getElementById("paginacompra");
let PaginaDevolucion = document.getElementById("paginadevolucion");
/*

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Tablaproductos = require('productos');
    Tablaproductos = Schema({
        nombreproducto: String
    });

const Tablaclientes = require('cliente');
    Tablaclientes = Schema({
        dni: String
    });

//esquema de la table cliente
let compraSchema = new mongoose.Schema({
    idcompra: {
        type: String,
        required: true,
        minlength: 4,
        trim: true,
        unique: true
    },
    idcliente: [Tablaclientes],
    nombreproducto: [Tablaproductos]
});

let compramodelo = mongoose.model('compra', compraSchema);

//anadir productos
document.getElementById("btncargarcompra").addEventListener('click', () => {
    let txtIDCompra = document.getElementById('txtidcompra').value;
    let txtNombreProducto = document.getElementById('txtnombreproducto').value;
    let txtIDCliente = document.getElementById('txtidcliente').value;
   
    //insertamos la compra
    let compra = new compramodelo({
        idcompra: txtIDCompra,
        idcliente: txtNombreProducto,
        nombreproducto: txtIDCliente,
        
    })
    let p1 = compra.save().then(result => {
        console.log("Se ha realizado la compra correctamente", result);
        alert('Se ha realizado la compra correctamente');
        Promise.all([p1]).then(values => {
            mongoose.connection.close();
        });
    }).catch(error => {
        console.log("ERROR al realizar la compra ", error);
        alert('ERROR al realizar la compra ');
    });

})

*/
//funcion salir
salir.addEventListener('click', (event) => {
    close()
})

//cambia de pagina a productos.html
PaginaProductos.addEventListener('click', (event) => {
    document.location.href = "productos.html";
})

//cambia de pagina a compra.html
PaginaClientes.addEventListener('click', (event) => {
    document.location.href = "index.html";
})

//cambia de pagina
PaginaDevolucion.addEventListener('click', (event) => {
    document.location.href = "devolucion.html";
})

//cambia de pagina a compra.html
PaginaCompra.addEventListener('click', (event) => {
    document.location.href = "compra.html";
})