;
'use strict'

const express = require('express'),
    bodyParser = require('body-parser'),
    connectDb = require('../config/db'),
    cors = require('cors'),
    parseurl     = require('parseurl')

let app = express(),
    /*usuarioRuta = require('../rutas/usuarios.rutas'),
    archivoRuta = require('../rutas/file.ruta')*/
    //db = connectDb()
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }


app.use(bodyParser.urlencoded({
    extended: true
}))





app.use(bodyParser.json())

//cors 
app.use(cors(corsOptions))



module.exports = app