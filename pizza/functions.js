//despegable
//1.- asignamos  el textfield una variable

let stick = document.getElementById("stick");
let c = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let ra = document.getElementById("radio1");
let ra2 = document.getElementById("radio2");
let ra3 = document.getElementById("radio3");
let botonlist = document.getElementById("boton");


botonlist.addEventListener('click', () => {
   let mostrar = stick.value + "\n "+  "Ingredientes \n";
   
   if (c.checked) {
     mostrar = mostrar +c.value + "\n "
   }
   if (c2.checked) {
      mostrar = mostrar +c2.value + "\n "
   }
   if(c3.checked){
      mostrar = mostrar +c3.value + "\n "
   }
   if (ra.checked) {
      mostrar = mostrar +ra.value+ "\n " 

   }
   if(ra2.checked){
      mostrar = mostrar +ra2.value+ "\n "
   }
   if (ra3.checked) {
      mostrar = mostrar +ra3.value+ "\n "
   }
   alert(mostrar )
   //manera sincrono
//modulo soporta la lectura y escritura de archivos
const fs = require('fs');


fs.writeFileSync('escribeme.txt',mostrar);

});



