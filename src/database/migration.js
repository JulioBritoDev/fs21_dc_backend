const Conexao = require('../config/conexao.js')
const UsuarioModel = require('../model/UsuarioModel.js')

function asyncMigrations() {
    try {
        Conexao.sync({ force: false, logging: false });
        console.log("Tabelas Criadas!");
    } catch(e) {
        throw new e;
    }
}

module.exports = asyncMigrations


// node migration.js