const fs = require('fs')

let btnprimero = document.getElementById('btnprimero')
let btnatras = document.getElementById('btnatras')
let btnadelante = document.getElementById('btnadelante')
let btnultimo = document.getElementById('btnultimo')
let btnborrar = document.getElementById('btnborrar')
let btninsertar = document.getElementById('btninsertar')
let btnactualizar = document.getElementById('btnactualizar')

let file = fs.readFileSync('./customers.json');
// matriz para manipular los datos
let customers = new Array()
// analiza el archivo en formato json
// ahora en la matriz de clientes tendremos un vector
// donde en cada posición del vector hay un objeto
// con los datos de un cliente
customers = JSON.parse(file);

let mostrarbtn = false;
let position = 0
let mostarcliente = ()=>{
    document.getElementById('dni').value = customers[position].dnijson
    document.getElementById("nombre").value = customers[position].namejson
    document.getElementById("telefono").value = customers[position].telefonojson
}

mostarcliente();

btnprimero.addEventListener('click', ()=>{
    position= 0;
    mostarcliente();
})

btnatras.addEventListener('click',()=>{
    if(position==0){
        position = 0;
    }else{
        position = position -1;
    }
    mostarcliente();
})

btnadelante.addEventListener('click', ()=>{
    if(position==(customers.length-1)){
        position = customers.length -1;
    }else{
        position= position +1;
    }
    mostarcliente();
})

btnultimo.addEventListener('click', ()=>{
    position= customers.length-1;
    mostarcliente();
})
 
btnborrar.addEventListener('click', ()=>{
    customers.splice(position,1);

    //Si borra la ultima posicion, el array tendra un valor menos, por la tanto la posicion anterior ya no será .length-1 si no .length
    if(position==(customers.length)){
        position = position -1;
    }else{
        position= position = 0;
    }

    if(customers.length==0){
        document.getElementById('dni').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('telefono').value = "";
    }
    mostarcliente();
    //actulizarfichero();
})

btnactualizar.addEventListener('click', ()=>{
    //obtiene los datos de la pantalla
    customers[position].dnijson = document.getElementById('dni').value;
    customers[position].namejson = document.getElementById('nombre').value
    customers[position].telefonojson = document.getElementById('telefono').value
    actulizarfichero();
})

let actulizarfichero = () =>{
    fs.writeFileSync('./customers.json',JSON.stringify(customers));
}

btninsertar.addEventListener('click',()=>{
    ocultarbtns();
    let nuevo = {}
    if(mostrarbtn== false){
        document.getElementById('dni').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('telefono').value = "";
        mostrarbtn = true
        //Cambia la clase de btn
        btninsertar.classList.remove("btn-primary")
        btninsertar.classList.add("btn-negative")
    }else{
        nuevo={
            dnijson: document.getElementById('dni').value,
            namejson: document.getElementById('nombre').value,
            telefonojson: document.getElementById('telefono').value
        }
    }
 

})

