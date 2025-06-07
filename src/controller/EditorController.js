const EditorModel = require("../model/EditorModel");
const ErrorServices = require("../services/ErrorServices");

const EditorController = {
    listar: async (request, response) => {
        const dados = await EditorModel.findAll();
        return response.json(dados);
    },
    consultarPorID: async (request, response) => {
        const id = request.params.id;
        const dados = await EditorModel.findByPk(id);
        return response.json(dados);
    },
    criar: async (request, response) => {

        try {
            const dados = request.body;
            await EditorModel.create(dados);
            return response.json({ 
                message: 'Editor criado com sucesso!',
                data: dados
            })  

        } catch(e) {
            return ErrorServices.validacaoErro('Não foi possível cadastrar seu Editor.', e, response);
        }
    },
    atualizar: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;
        await EditorModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Editor atualizado com sucesso!"
        })
    },
    deletar: async (request, response) => {
        const id = request.params.id;
        await EditorModel.destroy({
            where: {
                id: id
            }
        })
        return response.json({
            message: "Editor deletado com sucesso!"
        })
    }
}

module.exports = EditorController;