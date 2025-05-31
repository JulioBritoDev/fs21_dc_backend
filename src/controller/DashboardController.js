const UsuarioModel = require("../model/UsuarioModel");

const DashboardController = {
    dadosGraficos: async (request, response) => {
    
        const todosUsuarios = await UsuarioModel.findAll();
        const todosProdutos = await ProdutoModel.findAll();
        const todosProdutos = await ProdutoModel.findAll();
        const todosProdutos = await ProdutoModel.findAll();

        const totais = {
            usuarios: todosUsuarios.length,
            produtos: todosProdutos.length,
        }


        return response.json(totais);
    }
}

module.exports = DashboardController