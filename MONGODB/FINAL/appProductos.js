const fs = require("fs")
let salir = document.getElementById("idsalir");
let PaginaClientes = document.getElementById("paginaclientes");

//conexion a la base de datos , local
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//conexión
mongoose.connect('mongodb://localhost:27017/ferreteria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('connected') })
    .catch((err) => { console.log('error al conectarse a la bbdd ') })


//esquena de la tabla productos
let productosSchema =  new mongoose.Schema({
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

//modelo , añade una tabla productos a la bbdd
let productosmodelo = mongoose.model('productos', productosSchema);
mostrartodosproductos();


//anadir productos
document.getElementById("btnCargarproducto").addEventListener('click', () => {
    let txtNuevoid = document.getElementById('txtnuevoid').value;
    let txtNuevoproducto = document.getElementById('txtnuevoproducto').value;
    let txtNuevoprecio = document.getElementById('txtnuevoprecio').value;
    let txtNuevostock = document.getElementById('txtnuevostock').value;
   
    //insertamos los clientes
    let producto = new productosmodelo({
        idproducto: txtNuevoid,
        nombreproducto: txtNuevoproducto,
        precioproducto: txtNuevoprecio,
        cantidadproducto: txtNuevostock,
    })
    let p1 = producto.save().then(result => {
        console.log("nuevo producto añadido:", result);
    }).catch(error => {
        console.log("ERROR al añadir el producto :", error);
    });
    //
    Promise.all([p1]).then(values => {
        mongoose.connection.close();
    });
})


//mostrar en la web 
//busqueda con find
function mostrartodosproductos() {
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
        console.log("ERROR en find");
    });
}


//funcion salir
salir.addEventListener('click', (event) => {
    close()
})

//cambia de pagina a index.html que es la pagina de clientes
PaginaClientes.addEventListener('click', (event) => {
    document.location.href= "index.html";
})
