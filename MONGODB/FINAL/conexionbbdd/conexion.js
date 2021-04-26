//conexion a la base de datos , local
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//conexión
mongoose.connect('mongodb://localhost:27017/ferreteria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log('Se ha conectado a la Base de datos') })
    .catch((err) => { console.log('Error en la conexion') })


/*
const url = `mongodb+srv://antcha:<serpis>@cluster0.rbdrh.mongodb.net/ferreteria?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    */
