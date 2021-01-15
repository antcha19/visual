//declaramos las variables
let cel = document.getElementById("idcel");
let kel = document.getElementById("idkel")
let convertir = document.getElementById("idconvertir")
let limpiar = document.getElementById("idlimpiar")



convertir.addEventListener('click', (event) =>{
   if (kel.value == "") {
      kel.value = parseFloat(cel.value) + 273.15;
  }
  if (cel.value == "") {
      cel.value = (parseFloat(kel.value) - 273.15);
  }
})

//para eliminar el contenido los textfields
limpiar.addEventListener('click', (event) => {
   kel.value = "";
   cel.value = "";
})