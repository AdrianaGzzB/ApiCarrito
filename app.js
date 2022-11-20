// npm install express
// npm install body-parser'
// npm install mongoose
// npm install dotenv
// npm init
//despues de hacer todas las instalaciones e inicializarlo ya se puede correr el api
//1.-Requerir librerías, llaves y drivers
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const MongoDBUrl = process.env.MongoDBUrl;
const Controller = require('./controllers/admin');

//----------------------------------------------------------------------------------------
//2.-Configurar web server y parsee los datos
const app = express();
const port = process.env.PORT || 2500;
//instruccion para la asignacion del puerto dinamicamente

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

//----------------------------------------------------------------------------------------
//3.- Definir paths disponibles (lo que va entre comillas es la ruta)
app.get('/', (req, res) => { res.send('Servidor activo.... '); });
//creamos la api con la direccion /products
app.get('/products', Controller.getCatalog);
//le ponemos el nombre referente a lo que va traer
//:userId es el parametro que le pasamos como el parth param, que vive en la URL
app.get('/cart/users/:userId',Controller.getCartById);
app.post('/cart/users/:userId', Controller.insertCartById);
app.delete('/cart/users/:userId',Controller.deleteCardById);


//4.-encendiendo el servidor de aplicaciones y escucha peticiones en el puerto 2500 
app.listen(port, () => {
  console.log('Application Server conectado ');
  //encendemos la coneccion a la DB
  mongoose.connect(MongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Mongodb Server Conectado...');
  }, err => { console.log(err) });

});

//donde le vamos a mover para agregar al carrito,eliminar carrito y actualizar carrito en el proyecto de carrito
//hacer una copia de Ecommerce con Apis

