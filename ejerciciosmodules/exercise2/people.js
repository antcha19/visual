 //arraow function para anadir personas, siempre que no exista ya su telefono
 let nuevaPersona = persona =>{
    return new Promise((resolve, reject) => {
    let existe = data.filter(pers => pers.phone === persona.phone);
    if(existe.length ==0){
        data.push(persona);
        resolve(persona);
    }else{
        reject("error el telefono ya existe");
    }
        
});
} 
// Arrow function para borrar una persona por su teléfono
let borrarPersona = telefono => {
return new Promise((resolve, reject) => {
    let existePersona = data.filter(persona => persona.telefono === telefono);
    if (existePersona.length > 0) {
        data = data.filter(persona => persona.telefono != telefono);
        resolve(existePersona[0]);
    } else {
        reject("Error: no se han encontrado coincidencias");
    }
});
}

//metodo module.exports
