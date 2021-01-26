let name = document.getElementById("idname");
let surname = document.getElementById("idsurname");
let numeros = document.getElementById("idnumbres");
let mujer = document.getElementById("mujer");
let hombre = document.getElementById("hombre");
let label = document.getElementById("idlabel");
let escribir = document.getElementById("mostrar");


escribir.addEventListener('click',()=>{
   let mostrar = "Name " + name.value+ "\n" +
   "Surname " +  surname.value + "\n" +
  "Tiene " +  numeros.value+"\n"+
   "y su sexo  es :" 

    if(hombre.checked){
        mostrar = mostrar + hombre.value
    }
    if(mujer.checked){
        mostrar = mostrar + mujer.value
    }

    alert(mostrar);
  
   
    //escribir en el fichero
    const fs = require('fs');
fs.writeFileSync('escribir.txt', mostrar);
});




