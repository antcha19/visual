const mongoose = require('mongoose');

//esquema de la table cliente
let clientesSchema = new mongoose.Schema({
    dni: {
        type: String,
        required: true,
        minlength: 4,
        trim: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    apellidos: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    edad: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
       
        trim: true
    }
});

//modelo
//exportar modelo
module.exports = mongoose.model('cliente', clientesSchema);
