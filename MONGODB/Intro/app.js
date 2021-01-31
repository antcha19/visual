
// we load moongose
const mongoose = require('mongoose');
// establecemos el motor de promesa predeterminado en javascript
// esto es necesario porque mongo admite diferentes tipos de promesas
mongoose.Promise = global.Promise;
// connect with the contacts DB
const url1 = 'mongodb://localhost:27017/contacts'
//connect to atlas db
const url2 = 'mongodb+srv://root:<serpis>@cluster0.rbdrh.mongodb.net/<contacts>?retryWrites=true&w=majority'
mongoose.connect(url1, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('connected') })
    .catch((err) => { console.log('error') })

//scheme
let contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    telephone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^\d{9}$/
    },
    age: {
        type: Number,
        min: 18,
        max: 120
    }
});

//model asociamos  asi a una collecion en la bbdd
let Contact = mongoose.model('contacts', contactSchema);


// add documents
// first we create the contact
/*let contact1 = new Contact({
    name: "Boris",
    telephone: "946112230",
    age: 49
});
let contact2 = new Contact({
    name: "fgdf",
    telephone: "945452230",
    age: 49
});
// Usaremos una promesa de guardar para guardarla en la base de datos.
let p1 = contact1.save().then(result => {
    console.log("Contact added:", result);
}).catch(error => {
    console.log("ERROR adding contact:", error);
});*/

/*let p2 = contact2.save().then(result => {
    console.log("Contact added:", result);
}).catch(error => {
    console.log("ERROR adding contact:", error);
});*/

// search with find
let p3=Contact.find().then(result=>{
    console.log(result);
    }).catch(error=>{
    console.log("ERROR:",error);
    });

// find with parameters
/*
let p3 = Contact.find({ name: 'Boris', age: 49 }).then(result => {
    console.log(result);
}).catch(error => {
    console.log("ERROR:", error);
});*/
//actualizar
/*let p5 = Contact.findByIdAndUpdate('6016c8be40b9dc05ff2fd40f',
    { name: " Boris ", age: 51,telephone : "666666" }, { new: true })
    .then(result => {
        console.log("Modified contact:", result);
    }).catch(error => {
        console.log("ERROR:", error);
    });*/
// debemos esperar a que finalicen todas las promesas, ya que son asincrónicas
// para cerrar la conexión a la base de datos, Promise.all permite consultar el
// promesas pasadas como parámetro para ver si han terminado:*/

Promise.all([p3]).then(values => {
    mongoose.connection.close();
});




//1.-npm init
//2.-package.json poner start electron
//3.-npm install --save mongoose  or npm install mongoose
