//conexion a la base de datos , local
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//conexión
mongoose.connect('mongodb://localhost:27017/ferreteria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('connected') })
    .catch((err) => { console.log('error al conectarse a la bbdd ') })

