const Conexao = require('../config/conexao.js')
const UsuarioModel = require('../model/UsuarioModel.js')
const AutorModel = require('../model/AutorModel.js')
const EditorModel = require("../model/EditorModel.js")
const LivroModel = require('../model/LivroModel.js')

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