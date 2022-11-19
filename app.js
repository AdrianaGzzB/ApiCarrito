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
//3.- Definir paths disponibles
app.get('/', (req, res) => { res.send('Servidor activo.... ');});
app.listen(port, () => {
    console.log('Application Server conectado ');

  });
