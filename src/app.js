'use strict';

/*
*tipos de status
*200 -> ok
*201 -> create
*400 -> error
*401 -> não autenticado
*403 -> acesso negado
*404 -> pagina não encontrada
*500 -> internal serve error
*/

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexão com o BD
mongoose.connect('mongodb://lmauricio:lmauricio20101@ds045077.mlab.com:45077/node-str', { useNewUrlParser: true });

//carrega as models
const Product = require('./models/product');

//carrega as rotas
const index = require('./routes/index');
const product = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/products', product);

module.exports = app;