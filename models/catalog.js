//mongoose es una libreria
const mongoose = require('mongoose');
// Schema esta dentro de mongoose
const Schema = mongoose.Schema;
//se crea una instancia de mi clase Schema
//ya que la instancio creo mi modelo
const catalogModel = new Schema({
id: { type: Number, required: true},
nombre: { type: String, required: true},
tipo: { type: String, required: false },
cantidad: { type: String, required: true},
desc: { type: String, required: false},
precio: { type: Number, required: true},
img: { type: String, required: false}
},{collection:'catalogo'});
//este esquema o modelo ya se puede utilizar 
module.exports = mongoose.model('catalog', catalogModel);