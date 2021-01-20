// load fs module
const fs = require('fs')

//declaro las variables
let btnprimero = document.getElementById('btnprimero')
let btnatras = document.getElementById('btnatras')
let btnadelante = document.getElementById('btnadelante')
let btnultimo = document.getElementById('btnultimo')
let btnborrar = document.getElementById('btnborrar')
let btninsertar = document.getElementById('btninsertar')
let btnactualizar = document.getElementById('btnactualizar')


// leer el archivo .json
let file = fs.readFileSync('./customers.json');
// matriz para manipular los datos
let customers = new Array()
// analizar el archivo en formato json
// ahora en la matriz de clientes tendremos un vector
// donde en cada posición del vector hay un objeto
// con los datos de un cliente
customers = JSON.parse(file);

let position = 0
let mostarclientes = ()=>{
    document.getElementById("dni").value = customers[position].dnijson
    document.getElementById("nombre").value = customers[position].nombrejson
    document.getElementById("telefono").value = customers[position].telefonojson
}


btnprimero.addEventListener('click', ()=>{
    position= 0;
    mostarclientes();
})
btnadelante.addEventListener('click', ()=>{
    position= position +1;
    mostarclientes();
})
btnultimo.addEventListener('click',()=>{
    position=customers.length-1;
    mostarclientes();
})
btnatras.addEventListener('click',()=>{
    position= position-1;
    mostarclientes();
})

btnactualizar.addEventListener('click',()=>{
    customers[position].dnijson = document.getElementById("dni").value
    customers[position].nombrejson = document.getElementById("nombre").value
    customers[position].telefonojson = document.getElementById("telefono").value
    actualizarfichero();

});

let actualizarfichero =()=>{
    fs.writeFileSync('./customers.json', JSON.stringify(customers))
}

btninsertar.addEventListener('click',()=>{
    let cnuevo ={}
        if(!controlInsertar){
            document.getElementById("dni").value = ""
            document.getElementById("nombre").value = ""
            document.getElementById("telefono").value = ""
            controlInsertar = true
            //cambiar de color
btninsertar.classList.remove('btn-primary')
btninsertar.classList.add('btn-negative')
        }else{
            cnuevo ={
                dnijson: document.getElementById("dni").value,
                nombrejson:document.getElementById("nombre").value,
                telefonojson:document.getElementById("telefono").value
            }
            customers.push
        }
    
   
})


btnborrar.addEventListener('click', ()=>{
    customers.splice(position,1)
    if(position>=customers.length){
        position--
    }
    if(customers.length==0){
        document.getElementById("dni").value = ""
        document.getElementById("nombre").value = ""
        document.getElementById("telefono").value = ""
    }else{
        mostarclientes()
    }
    actualizarfichero()

})