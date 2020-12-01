let data = [
    {name: "Nacho", phone: "966112233", age: 40},
    {name: "Ana", phone: "911223344", age: 35},
    {name: "Mario", phone: "611998877", age: 15},
    {name: "Laura", phone: "633663366", age: 17}];
    
    
    //arraow function para anadir personas, siempre que no exista ya su telefono
    let newPerson = Promise((resolve, reject)=>{
        let existe = data.filter(pers => pers.phone === personanueva.phone);
        if(existe.length ==0)
           resolve (existe);
        else
            reject("no results");
    });
    
    newPerson.then(result => {
        // If we are here the promise has been correctly processed
     
        console.log("ha insertado corrctamente");
        console.log(result);
        }).catch(error => {
        // if we are here there was an error
        console.log("Error:", error);
    });
    //agrea persona
    newPerson ({name: "Juan", phone: "965661564", age: 60});

    console.log (data);