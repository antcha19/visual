const fs = require("fs")

let salir = document.getElementById("idsalir");
let PaginaProductos = document.getElementById("paginaproductos");
let PaginaClientes = document.getElementById("paginaclientes");
let PaginaCompra = document.getElementById("paginacompra");
let PaginaDevolucion = document.getElementById("paginadevolucion");


/*

var mongoose = require('mongoose'), Schema = mongoose.Schema

//esquema de la table cliente
let clientesSchema = new mongoose.Schema({
    dni: {
        type: String,
        required: true,
        minlength: 4,
        trim: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    edad: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }

});

//esquena de la tabla productos
let productosSchema = new mongoose.Schema({
    idproducto: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    nombreproducto: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    precioproducto: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    cantidadproducto: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    }
});

//esquena de la tabla productos
let compraSchema = new mongoose.Schema({
    idcompra: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    nombreproductocompra: {
        type: Schema.Types.ObjectId, ref: 'productos'
    },
    dniclientecompra: {
        type: Schema.Types.ObjectId, ref: 'cliente'
    }
});

let productosmodelo = mongoose.model('productos', productosSchema);
let clientemodelo = mongoose.model('cliente', clientesSchema);
let compramodelo = mongoose.model('compra', compraSchema);



//anadir añadir compra
document.getElementById("btncargarcompra").addEventListener('click', () => {
    let txtIDCompra = document.getElementById('txtidcompra').value;
 //   let txtNombreProducto = document.getElementById('txtnombreproducto').value;
 //   let txtIDCliente = document.getElementById('txtidcliente').value;

    //insertamos los una compra
    let compra = new compramodelo({
        idcompra: txtIDCompra,
     //   nombreproductocompra: txtNombreProducto,
      //  dniclientecompra: txtIDCliente,
    })
    let p1 = compra.save().then(result => {
        console.log("nuevo cliente añadido:", result);
        alert('Nuevo cliente añadido');
    }).catch(error => {
        console.log("ERROR al añadir al cliente :", error);
        alert('ERROR al añadir al cliente ');
    });
    //
    Promise.all([p1]).then(values => {
        mongoose.connection.close();

    });

})*/

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