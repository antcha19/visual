const fs = require("fs")
//conexion a la base de datos , local
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//conexion bbdd
const conexion = require('./conexionbbdd/conexion');
//const compramodelo = require('./modelos/producto');
const productosmodelo = require('./modelos/producto');

let salir = document.getElementById("idsalir");
let PaginaProductos = document.getElementById("paginaproductos");
let PaginaClientes = document.getElementById("paginaclientes");
let PaginaCompra = document.getElementById("paginacompra");
let PaginaDevolucion = document.getElementById("paginadevolucion");


/*
//buscar un producto
document.getElementById("btnbuscar").addEventListener('click',()=>{
    let txtbuscar = document.getElementById("txtbuscar").value;
    productosmodelo.find({nombreproducto:{$regex:'.*'+txtbuscar+'.*'}}).then(resultado => {
        let cadenaDOM = "";
        resultado.forEach(producto => {
            cadenaDOM +=
                `<div>
                    <table >
                        <tr style="background-color:#567CE3 ;">
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>precio</th>
                            <th>Cantidad</th>
                        </tr>
                        <tr>
                            <td>${producto.idproducto}</td>
                            <td>${producto.nombreproducto}</td>
                            <td>${producto.precioproducto}</td>
                            <td>${producto.cantidadproducto}</td>
                        </tr>
                    </table>
                </div>`;
        });
        document.getElementById("wrapper").innerHTML = cadenaDOM;
        
    }).catch(error => {
        alert('Error al buscar el producto, puede que no exista')
    });
    document.getElementById("txtbuscar").value = "";
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