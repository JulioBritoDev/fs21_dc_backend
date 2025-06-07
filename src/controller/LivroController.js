const AutorModel = require("../model/AutorModel");
const EditorModel = require("../model/EditorModel");
const LivroModel = require("../model/LivroModel");
const ErrorServices = require("../services/ErrorServices");

const LivroController = {
    listar: async (request, response) => {
        const dados = await LivroModel.findAll({
            attributes: ['id', 'titulo', 'ano'],
            include: [
                {
                    model: AutorModel,
                    as: 'autor'
                }, 
                {
                    model: EditorModel,
                    as: 'editor'
                }
            ]
        });
        return response.json(dados);
    },
    consultarPorID: async (request, response) => {
        const id = request.params.id;
        const dados = await LivroModel.findByPk(id);
        return response.json(dados);
    },
    criar: async (request, response) => {

        try {
            const dados = request.body;
            await LivroModel.create(dados);
            return response.json({ 
                message: 'Livro criado com sucesso!',
                data: dados
            })  

        } catch(e) {
            return ErrorServices.validacaoErro('Não foi possível cadastrar seu Livro.', e, response);
        }
    },
    atualizar: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;
        await LivroModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Livro atualizado com sucesso!"
        })
    },
    deletar: async (request, response) => {
        const id = request.params.id;
        await LivroModel.destroy({
            where: {
                id: id
            }
        })
        return response.json({
            message: "Livro deletado com sucesso!"
        })
    }
}

module.exports = LivroController;