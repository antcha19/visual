let data = [
    {name: "Nacho", phone: "966112233", age: 40},
    {name: "Ana", phone: "911223344", age: 35},
    {name: "Mario", phone: "611998877", age: 15},
    {name: "Laura", phone: "633663366", age: 17}];
    
    
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
    //agrea persona
    nuevaPersona ({name: "Juan", phone: "965661564", age: 60}).then(resultado =>{
        console.log("Añadida persona:", resultado);
    }).catch(error => {
    console.log(error);
    });
    nuevaPersona({name: "Rodolfo", phone:"910011001", age: 20}).then(resultado => {
        console.log("Añadida persona:", resultado);
    }).catch(error => {
        console.log(error);
    });
    // Inserción repetida para que dé error
    nuevaPersona({name: "Rodolfo", phone:"910011001", age: 20}).then(resultado => {
        console.log("Añadida persona:", resultado);
    }).catch(error => {
        console.log(error);
    });
    
    // Borrados
    borrarPersona("910011001").then(resultado => {
        console.log("Borrada persona:", resultado);
    }).catch(error => {
        console.log(error);
    });
    // Borrado con número equivocado para que dé error
    borrarPersona("000000000").then(resultado => {
        console.log("Borrada persona:", resultado);
    }).catch(error => {
        console.log(error);
    });

    console.log (data);