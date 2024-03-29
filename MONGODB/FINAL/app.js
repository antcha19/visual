const fs = require("fs")
//conexion a la base de datos , local
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const conexion = require('./conexionbbdd/conexion');


let salir = document.getElementById("idsalir");
let PaginaProductos = document.getElementById("paginaproductos");
let PaginaClientes = document.getElementById("paginaclientes");
let PaginaCompra = document.getElementById("paginacompra");
let PaginaDevolucion = document.getElementById("paginadevolucion");
//exporto la tabla de cliente
//Modelos
var clientemodelo = require('./modelos/cliente');



mostrartodosclientes();
limpiarclientes();

//anadir clientes
document.getElementById("btnCargar").addEventListener('click', () => {
    let txtNuevodni = document.getElementById('txtnuevodni').value;
    let txtNuevonombre = document.getElementById('txtnuevonombre').value;
    let txtNuevoapellidos = document.getElementById('txtnuevoapellidos').value;
    let txtNuevoedad = document.getElementById('txtnuevoedad').value;
    let txtNuevodireccion = document.getElementById('txtnuevodireccion').value;
    let txtNuevoemail = document.getElementById('txtnuevoemail').value;
    //insertamos los clientes
    let cliente = new clientemodelo({
        dni: txtNuevodni,
        nombre: txtNuevonombre,
        apellidos: txtNuevoapellidos,
        edad: txtNuevoedad,
        direccion: txtNuevodireccion,
        email: txtNuevoemail
    })
    cliente.save().then(result => {
        console.log("nuevo cliente añadido:", result);
        alert('Nuevo cliente añadido');
    }).catch(error => {
        console.log(error);
        alert('ERROR al añadir al cliente ');
    });
    //
    
    mostrartodosclientes();
    limpiarclientes();
})


//busqueda con find
function mostrartodosclientes() {
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
}

//borrar cliente
document.getElementById("btnborrar").addEventListener('click', () => {
    let txtborrarcliente = document.getElementById('txtborrarcliente').value;
    clientemodelo.remove({ dni: txtborrarcliente }).then(result => {
        alert('El cliente ha sido borrado');
    }).catch(error => {
        alert('Error al borrar el cliente')
    });
    mostrartodosclientes();
    limpiarclientes();
})

//buscar por dni
document.getElementById("btnbuscardni").addEventListener('click', () => {
    let txtbuscardni = document.getElementById("txtbuscardni").value;
    clientemodelo.find({ dni: { $regex: '.*' + txtbuscardni + '.*' } }).then(resultado => {
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
                let variable = cliente.dni;
                alert('ha sido encontrado' + variable)
        });
        
        document.getElementById("wrapper").innerHTML = cadenaDOM;
        
    }).catch(error => {
        alert('Error al buscar el Cliente, puede que no exista')
    });
    limpiarclientes();

})



//buscar por nombre del cliente
document.getElementById("btnbuscarnombre").addEventListener('click', () => {
    let txtBuscarNombre = document.getElementById("txtbuscarnombre").value;
    clientemodelo.find({ nombre: { $regex: '.*' + txtBuscarNombre + '.*' } }).then(resultado => {
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
        alert('Error al buscar el nombre del cliente, puede que no exista')
    });

    limpiarclientes();
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
PaginaCompra.addEventListener('click', (event) => {
    document.location.href = "compra.html";
})

//cambia de pagina a devolucion.html
PaginaDevolucion.addEventListener('click', (event) => {
    document.location.href = "devolucion.html";
})


//actualizar la pagina
PaginaClientes.addEventListener('click', () => {
    mostrartodosclientes();
    limpiarclientes();
})


function limpiarclientes() {
    //insertar
    document.getElementById('txtnuevodni').value = "";
    document.getElementById('txtnuevonombre').value = "";
    document.getElementById('txtnuevoapellidos').value = "";
    document.getElementById('txtnuevoedad').value = "";
    document.getElementById('txtnuevodireccion').value = "";
    document.getElementById('txtnuevoemail').value = "";
    //buscar el nombre
    document.getElementById("txtbuscarnombre").value = "";
    //buscar el dni
    document.getElementById("txtbuscardni").value = "";
    //borrar por el dni
    document.getElementById('txtborrarcliente').value = " ";
}