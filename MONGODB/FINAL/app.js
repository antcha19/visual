const fs = require("fs")

let salir = document.getElementById("idsalir");
let PaginaProductos = document.getElementById("paginaproductos");
let PaginaClientes = document.getElementById("paginaclientes");
let PaginaCompra = document.getElementById("paginacompra");
let PaginaDevolucion = document.getElementById("paginadevolucion");



//conexion a la base de datos , local
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//conexión

mongoose.connect('mongodb://localhost:27017/ferreteria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('connected') })
    .catch((err) => { console.log('error al conectarse a la bbdd ') })
    




/*-----------------------------------cliente---------------------------------------------- */



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

//modelo
//exportar modelo
module.exports = mongoose.model('cliente', clientesSchema);
//añade una tabla cliente a la bbdd 
let clientemodelo = mongoose.model('cliente', clientesSchema);
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
    let p1 = cliente.save().then(result => {
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
    document.getElementById('txtnuevoemail').value= "";
    //buscar el nombre
    document.getElementById("txtbuscarnombre").value = "";
    //buscar el dni
    document.getElementById("txtbuscardni").value = "";
    //borrar por el dni
    document.getElementById('txtborrarcliente').value = " ";
}