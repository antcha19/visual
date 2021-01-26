let preciounitario = document.getElementById("idprecio");
let cantidad = document.getElementById("idcantidad");
let limpiar = document.getElementById("idlimpiar");
let calcular = document.getElementById("idcalcular");
let salir = document.getElementById("idsalir");
let parcial = document.getElementById("idparcial");
let descuento = document.getElementById("iddescuento");
let neto = document.getElementById("idneto");

limpiar.addEventListener('click', (event) =>{
    preciounitario.value ="";
    cantidad.value ="";
    parcial.value ="";
    descuento.value ="";
    neto.value ="";
    
})


calcular.addEventListener('click', (event) =>{
    let parcialtem = parseFloat(preciounitario.value) * parseFloat(cantidad.value);
    parcial.value = parcialtem;
    let netotem = parseFloat(parcial.value) - parseFloat(descuento.value);
    neto.value = netotem;
})


salir.addEventListener('click', (event) =>{
    close()
})

