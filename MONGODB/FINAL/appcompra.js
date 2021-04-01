const fs = require("fs")
//conexion a la base de datos , local
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//conexion bbdd
const conexion = require('./conexionbbdd/conexion');
//exportamos los modelos necesarios
const productosmodelo = require('./modelos/producto');
const compramodelo = require('./modelos/compra')
const clientemodelo = require('./modelos/cliente')

let salir = document.getElementById("idsalir");
let PaginaProductos = document.getElementById("paginaproductos");
let PaginaClientes = document.getElementById("paginaclientes");
let PaginaCompra = document.getElementById("paginacompra");
let PaginaDevolucion = document.getElementById("paginadevolucion");

//anadir compra
document.getElementById("btncargarcompra").addEventListener('click', () => {
    
    let txtIdcompra = document.getElementById('txtidcompra').value;
    let txtIDcliente = document.getElementById('txtidcliente').value;
    let horaactual = Date.now();
    clientemodelo.find({ dni: { $regex: '.*' + txtIDcliente + '.*' } }).then(resultado => {
     
        resultado.forEach(cliente => {
            let variable = cliente.dni;
            if (variable == txtIDcliente) {
                //insertamos los clientes
                let nuevacompra = new compramodelo({
                    idcompra: txtIdcompra,
                    date: horaactual,
                    clienteid: txtIDcliente,
    
                })
                let p1 = nuevacompra.save().then(result => {
                    console.log(result);
                    alert('Se ha realizado la compra existosamente:');
                    Promise.all([p1]).then(values => {
                        mongoose.connection.close();
                    });
                }).catch(error => {
                    console.log(error);
                    alert('ERROR al relizar la compra :');
                });
            }
        });
        
       
    }).catch(error => {
        alert('Error al buscar el Cliente, puede que no exista')
    });



})





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
