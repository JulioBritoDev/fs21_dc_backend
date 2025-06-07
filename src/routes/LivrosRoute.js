const express = require('express');
const LivroController = require('../controller/LivroController.js');

const LivrosRoute = express.Router();
LivrosRoute.get('/livros', LivroController.listar)
LivrosRoute.get('/livros/:id', LivroController.consultarPorID)
LivrosRoute.post('/livros', LivroController.criar)
LivrosRoute.put('/livros/:id', LivroController.atualizar)
LivrosRoute.delete('/livros/:id', LivroController.deletar);

module.exports = LivrosRoute;
