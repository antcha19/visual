//1.- asignamos  el textfield una variable
let text = document.getElementById("text");

//asignamos el listiner al boton
let button = document.getElementById("button")
button.addEventListener('click', () => {
   alert(text.value);
});


// text field event
//text.addEventListener('click ', () => {
// alert ("Click in text field!");
//});


text.addEventListener('keyup', (event) => {
    if (event.code == "Enter") {
       // alert("Enter!");
       sample.innerHTML=text.value;
    }
});