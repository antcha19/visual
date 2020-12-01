let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];
let OlderofAgePromise = new Promise ((resolve, reject) => {
    let result = data.filter (person => person.age >= 18);
    if (result.length> 0)
        resolve (result);
    else
        reject ("No results");
});

OlderofAgePromise.then(result => {
    // If we are here the promise has been correctly processed
 
    console.log("Matched coincidences:");
    console.log(result);
    }).catch(error => {
    // if we are here there was an error

    console.log("Error:", error);
    });

