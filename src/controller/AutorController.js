const AutorModel = require("../model/AutorModel");
const ErrorServices = require("../services/ErrorServices");

const AutorController = {
    listar: async (request, response) => {
        const dados = await AutorModel.findAll();
        return response.json(dados);
    },
    consultarPorID: async (request, response) => {
        const id = request.params.id;
        const dados = await AutorModel.findByPk(id);
        return response.json(dados);
    },
    criar: async (request, response) => {

        try {
            const dados = request.body;
            await AutorModel.create(dados);
            return response.json({ 
                message: 'Autor criado com sucesso!',
                data: dados
            })  

        } catch(e) {
            return ErrorServices.validacaoErro('Não foi possível cadastrar seu Autor.', e, response);
        }
    },
    atualizar: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;
        await AutorModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Autor atualizado com sucesso!"
        })
    },
    deletar: async (request, response) => {
        const id = request.params.id;
        await AutorModel.destroy({
            where: {
                id: id
            }
        })
        return response.json({
            message: "Autor deletado com sucesso!"
        })
    }
}

module.exports = AutorController;