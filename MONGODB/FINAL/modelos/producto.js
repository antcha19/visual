const mongoose = require('mongoose');
//esquena de la tabla productos
let productosSchema = new mongoose.Schema({
    idproducto: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    nombreproducto: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    precioproducto: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    cantidadproducto: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    cantidadproducto: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    imagen: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

//exportar modelo
module.exports = mongoose.model('productos', productosSchema);
