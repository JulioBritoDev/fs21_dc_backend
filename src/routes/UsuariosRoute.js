const express = require('express');
const UsuarioModel = require('../model/UsuarioModel.js');

const UsuariosRoute = express.Router();

UsuariosRoute.get('/usuarios', async (request, response) => {
    const dados = await UsuarioModel.findAll();
    return response.json(dados);
})

UsuariosRoute.get('/usuarios/:id', async (request, response) => {
    const id = request.params.id;
    const dados = await UsuarioModel.findByPk(id);
    return response.json(dados)
})

UsuariosRoute.post('/usuarios', async (request, response) => {
    const dados = request.body;
    await UsuarioModel.create(dados);
    return response.json({ 
        message: 'Usuário criado com sucesso!',
        data: dados
    })
})

UsuariosRoute.put('/usuarios/:id', async (request, response) => {
    const dados = request.body;
    const id = request.params.id;
    await UsuarioModel.update(dados, {
        where: {
            id: id
        }
    });
    return response.json({
        message: "Usuário atualizado com sucesso!"
    })
})

UsuariosRoute.delete('/usuarios/:id', async (request, response) => {
    const id = request.params.id;
    await UsuarioModel.destroy({
        where: {
            id: id
        }
    })
    // DELETE FROM usuarios WHERE id = ;DELETE FROM usuarios;;
    return response.json({
        message: "Usuário deletado com sucesso!"
    })
});

module.exports = UsuariosRoute;
