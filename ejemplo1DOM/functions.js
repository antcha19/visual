// accesp div elemto 'data'
let mDiv = document.getElementById("data");

//añade un paragraph to data
mDiv.innerHTML = "<p> Content of the div </p>";

// Create a button 
let button = document.createElement("button");
// add the button text attribute
button.textContent = "Button";

//añade el boton al body del html
document.body.appendChild(button);

button.addEventListener('click', () => {
    alert('has pulsado al boton');
});