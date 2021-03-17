const fs = require("fs")

let salir = document.getElementById("idsalir");
let PaginaProductos =document.getElementById("paginaproductos");
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
        minlength: 9,
        trim: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        minlength: 5,
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
        minlength: 5,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    }
});

//modelo
//añade una tabla cliente a la bbdd 
let clientemodelo = mongoose.model('cliente', clientesSchema);
mostrartodosclientes();

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
    });
   
}



//funcion salir
salir.addEventListener('click', (event) => {
    close()
})

//cambia de pagina a productos.html
PaginaProductos.addEventListener('click', (event) => {
    document.location.href= "productos.html";
})

//cambia de pagina a compra.html
PaginaCompra.addEventListener('click', (event)  =>{
    document.location.href="compra.html";
})

//cambia de pagina
PaginaDevolucion.addEventListener('click', (event) => {
    document.location.href="devolucion.html";
})




