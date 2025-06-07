const express = require('express');
const AutorController = require('../controller/AutorController.js');

const AutoresRoute = express.Router();
AutoresRoute.get('/autores', AutorController.listar)
AutoresRoute.get('/autores/:id', AutorController.consultarPorID)
AutoresRoute.post('/autores', AutorController.criar)
AutoresRoute.put('/autores/:id', AutorController.atualizar)
AutoresRoute.delete('/autores/:id', AutorController.deletar);

module.exports = AutoresRoute;
