let data = [
{name: "Nacho", phone: "966112233", age: 40},
{name: "Ana", phone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", phone: "633663366", age: 17}];


//arraow function para anadir personas, siempre que no exista ya su telefono
let newPerson = personanueva=>{
    let existe = data.filter(pers => pers.phone === personanueva.phone);
    if(existe.length ==0)
    data.push(personanueva);
}

//arrow fucntion para borrar personas, si existe su telefono
let deletePerson = phone=>{
    data = data.filter(persona => persona.phone != phone);
}


newPerson ({name: "Juan", phone: "965661564", age: 60});
newPerson ({name: "Rodolfo", phone: "910011001", age: 20});
deletePerson ("910011001");
console.log (data);