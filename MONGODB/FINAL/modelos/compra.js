const mongoose = require('mongoose');
const  clienteSchema  = require('./cliente')

let compraSchema = new mongoose.Schema({
    
    idcompra: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    clienteid: {
        type: String,
        required: true
    },
    productoid:{
        type: Array,
        required: true
    }

})

const compramodelo = mongoose.model('compra', compraSchema)

module.exports = compramodelo