//conexion a la base de datos , local
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//conexión
mongoose.connect('mongodb://localhost:27017/ferreteria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('Se ha conectado a la Base de datos') })
    .catch((err) => { console.log('Error en la conexion') })

//conexión

/*
mongoose.connect('mongodb+srv://antcha:<serpis>@cluster0.rbdrh.mongodb.net/ferreteria?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('Se ha conectado a la Base de datos') })
    .catch((err) => { console.log('Error en la conexion') })
*/
