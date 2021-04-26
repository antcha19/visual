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
    //guardo los valores que introduzco en la interfaz
    let txtIdcompra = document.getElementById('txtidcompra').value;
    let txtIDcliente = document.getElementById('txtidcliente').value;
    let txtIDProducto = document.getElementById('txtidproducto').value;
    // hora actual de la compra
    let horaactual = Date.now();
    clientemodelo.find({ dni: { $regex: '.*' + txtIDcliente + '.*' } }).then(resultado => {
        resultado.forEach(cliente => {
            //guardo el dni para comprobar si existe
            let variable = cliente.dni;
            //si existe el id entra en el bucle
            if (variable == txtIDcliente) {
                productosmodelo.find({idproducto: { $regex: '.*' + txtIDProducto + '.*' }}).then(resultadopro =>{
                    resultadopro.forEach(producto => {
                        //guardo el id del producto para comprabar si existe
                        let productoencontrado = producto.idproducto;
                        //si existe el producto entra en el bucle
                        if(productoencontrado == txtIDProducto){
                            let nuevacompra = new compramodelo({
                                idcompra: txtIdcompra,
                                date: horaactual,
                                clienteid: txtIDcliente,
                                productoid: txtIDProducto
                            })
                            //guardo la compra en la base de datos 
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
                    })
                })
            }
        });
    }).catch(error => {
        alert('Error al buscar el Cliente, puede que no exista')
    });
})

//mostar productos
document.getElementById("mostrarproductos").addEventListener('click', () => {
    productosmodelo.find().then(resultado => {
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
                            <th>Imagen</th>
                        </tr>
                        <tr>
                            <td>${producto.idproducto}</td>
                            <td>${producto.nombreproducto}</td>
                            <td>${producto.precioproducto}</td>
                            <td>${producto.cantidadproducto}</td>
                            <td><a href="./images/${producto.imagen}" target="_blank" ><img src="./images/${producto.imagen}" height="50" width="50"></td>
                         
                        </tr>
                    </table>
                </div>`;
        });
        document.getElementById("wrapper").innerHTML = cadenaDOM;
    }).catch(error => {
        console.log("ERROR en find");
    });
    
})

//mostar productos
document.getElementById("mostrarclientes").addEventListener('click', () => {
    clientemodelo.find().then(resultado => {
        let cadenaDOM = "";
        resultado.forEach(cliente => {
            cadenaDOM +=
                `<div>
                    <table >
                        <tr style="background-color:#567CE3 ;">
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Edad</th>
                            <th>Direccion</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>${cliente.dni}</td>
                            <td>${cliente.nombre}</td>
                            <td>${cliente.apellidos}</td>
                            <td>${cliente.edad}</td>
                            <td>${cliente.direccion}</td>
                            <td>${cliente.email}</td>
                        </tr>
                    </table> 
                </div>`;

        });
        document.getElementById("wrapper").innerHTML = cadenaDOM;
    }).catch(error => {
        console.log("ERROR en find");
        alert('Error al buscar');
    });
    
})




mostrarcompras();

//busqueda con find de producto
function mostrarcompras() {
    compramodelo.find().then(resultado => {
        let cadenaDOM = "";
        resultado.forEach(compra => {
            cadenaDOM +=
                `<div>
                    <table >
                        <tr style="background-color:#567CE3 ;">
                            <th>ID Compra</th>
                            <th>Fecha de la compra</th>
                            <th>ID cliente</th>
                            <th>ID producto</th>
                        </tr>
                        <tr>
                            <td>${compra.idcompra}</td>
                            <td>${compra.date}</td>
                            <td>${compra.clienteid}</td>
                            <td>${compra.productoid}</td>
                        </tr>
                    </table> 
                </div>`;

        });
        document.getElementById("wrapper").innerHTML = cadenaDOM;
    }).catch(error => {
        console.log("ERROR en find");
        alert('Error al buscar');
    });

}





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
