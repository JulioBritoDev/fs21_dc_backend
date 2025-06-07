const express = require('express');
const EditorController = require('../controller/EditorController.js');

const EditoresRoute = express.Router();
EditoresRoute.get('/editores', EditorController.listar)
EditoresRoute.get('/editores/:id', EditorController.consultarPorID)
EditoresRoute.post('/editores', EditorController.criar)
EditoresRoute.put('/editores/:id', EditorController.atualizar)
EditoresRoute.delete('/editores/:id', EditorController.deletar);

module.exports = EditoresRoute;
