const Catalog = require('../models/catalog');
const Cart = require('../models/cart');
const cart = require('../models/cart');
require('dotenv').config();
const API_KEY = process.env.API_KEY;
//obtener todo el catalogo de la tienda
//requer y respons
const getCatalog = (req, res) => {
    if (req.query.apikey === API_KEY) {
        //con el find las llaves vacias {}= me va traer todos los productos sin filtrar
        //{ _id: 0 } con esto le digo que no me traiga el identificador del objeto
        //err es error o doc son los datos de respuesta
        Catalog.find({}, { _id: 0 }, function (err, doc) {
            //pintame el error y mandame el error
            if (err) {
                console.error(err.message);
                res.status(400).send("Error");
            }
            else {
                //pintame los datos y mandame el status
                console.log(doc);
                res.status(200).send(doc);
            }
        });
    }
    else
        res.status(403).json('acceso No autorizado');

}
//obtener el carrito de compras
const getCart = () => {

}
//obtener el carrito de compras de un usuario
const getCartById = (req, res) => {
    if (req.query.apikey === API_KEY && req.params.userId != '') {
        //con el find las llaves vacias {}= me va traer todos los productos sin filtrar
        //{ _id: 0 } con esto le digo que no me traiga el identificador del objeto
        //err es error o doc son los datos de respuesta
        cart.find({id:req.params.userId}, { _id: 0 }, function (err, doc) {
            //pintame el error y mandame el error
            if (err) {
                console.error(err.message);
                res.status(400).send("Error");
            }
            else {
                //pintame los datos y mandame el status
                console.log(doc);
                res.status(200).send(doc);
            }
        });
    }
    else
        res.status(403).json('acceso No autorizado');

}
//borrar del carrito de compras de un usuario
const deleteCardById = (req, res) => {
    if (req.query.apikey === API_KEY && req.params.userId != '') {
        //con el find las llaves vacias {}= me va traer todos los productos sin filtrar
        //{ _id: 0 } con esto le digo que no me traiga el identificador del objeto
        //err es error o doc son los datos de respuesta
        cart.deleteOne({id:req.params.userId}, { _id: 0 }, function (err, doc) {
            //pintame el error y mandame el error
            if (err) {
                console.error(err.message);
                res.status(400).send("Error");
            }
            else {
                //pintame los datos y mandame el status
                console.log(doc);
                res.status(204).send(doc);
            }
        });
    }
    else
        res.status(403).json('acceso No autorizado');


}
//cargar o guardar el carrito de compras de un usuario
const insertCartById = (req, res) => {
    if (req.query.apikey === API_KEY && req.params.userId != '' && req.body!='') {
        //el body lo pasamos a la variable doc
        const doc=req.body
        //con el find las llaves vacias {}= me va traer todos los productos sin filtrar
        //{ _id: 0 } con esto le digo que no me traiga el identificador del objeto
        //err es error o doc son los datos de respuesta
        //con el create se va insertar el documento que acabamos de obtener 
        cart.create( doc, function (err, rep) {
            //pintame el error y mandame el error
            if (err) {
                console.error(err.message);
                res.status(400).send("Error");
            }
            else {
                //pintame los datos y mandame el status
                console.log(rep);
                res.status(201).send(rep);
            }
        });
    }
    else
        res.status(403).json('acceso No autorizado');   

}

exports.getCatalog = getCatalog;
exports.getCart = getCart;
exports.getCartById = getCartById;
exports.deleteCardById = deleteCardById;
exports.insertCartById = insertCartById;
