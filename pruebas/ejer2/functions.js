//variables
let nombre = document.getElementById("idtext");
let email = document.getElementById("idmail");
let telefono = document.getElementById("idtelefono");
let direccion = document.getElementById("iddireccion");
let tarjeta = document.getElementById("idtarjeta");
let proveedor = document.getElementById("idproveedor");
let hombre = document.getElementById("hombre");
let mujer = document.getElementById("mujer");
let botonlist = document.getElementById("boton");

botonlist.addEventListener('click',()=>{
    let mostrar = "Nombre " + nombre.value + "\n" +
    "Email " + email.value+ "\n" +
    "Telefono " + telefono.value + "\n" +
    "Direccion " + direccion.value + "\n" +
    "Tarjeta " + tarjeta.value + "\n" +
    "Proveedor " + proveedor.value + "\n" +
    "Sexo "

    if(hombre.checked){
        mostrar = mostrar + hombre.value
    }
    if(mujer.checked){
        mostrar = mostrar + mujer.value
    }
    //escribir en el fichero
    const fs = require('fs');
fs.writeFileSync('escribir.txt', mostrar);
});

