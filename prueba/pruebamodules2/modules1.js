// separate code, if necessary
console.log('Entering utilidades.js');

// functions
let Add = (num1, num2) => num1 + num2;
let Subtract = (num1, num2) => num1 - num2;

// to export functions it is necessary to say it explicitly
module.exports = {
 Add: Add,
 Subtract: Subtract
};