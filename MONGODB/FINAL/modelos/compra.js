const mongoose = require('mongoose');
const {clienteSchema} = require('./cliente')

const compraSchema = new mongoose.Schema({
    cliente:{
        type: clienteSchema,
        required: true
    },
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
    }
})

const compramodelo= mongoose.model('compra', compraSchema)

module.exports= compramodelo