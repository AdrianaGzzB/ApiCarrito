//libreria mongose ayuda a crear el esquema
const mongoose = require('mongoose');
//es la clase y la instancia Schema
const Schema = mongoose.Schema;

const cartModel = new Schema({
    //todo lo que dice true es requerrido, para definir un producto
    id: { type: String, required: true },
    carrito: [{
        id: { type: Number, required: true },
        nombre: { type: String, required: true },
        tipo: { type: String, required: false },
        cantidad: { type: String, required: true },
        desc: { type: String, required: false },
        precio: { type: Number, required: true },
        //como la imagen es una url por eso es string
        img: { type: String, required: false }
    }]
}, { collection: 'carrito' });

module.exports = mongoose.model('cart', cartModel);