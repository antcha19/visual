let texto1 = document.getElementById("idtext");
let limpiar = document.getElementById("idlimpiar");
let calcular = document.getElementById("idcalcular");
let salir = document.getElementById("idsalir");
let texto2 = document.getElementById("idtext2");


limpiar.addEventListener('click', (event) =>{
    texto1.value ="";
    texto2.value ="";
})

calcular.addEventListener('click',(event)=>{
    if (texto1.value == "1"){
        texto2.value = "Lunes";
    }
    if (texto1.value == "2"){
        texto2.value = "martes";
    }
    if (texto1.value == "3"){
        texto2.value = "miercoles";
    }
    if (texto1.value == "4"){
        texto2.value = "jueves";
    }
    if (texto1.value == "5"){
        texto2.value = "viernes";
    }
    if (texto1.value == "6"){
        texto2.value = "sabado";
    }
    if (texto1.value == "7"){
        texto2.value = "domingo";
    }

});
salir.addEventListener('click', (event) =>{
    close()
})


