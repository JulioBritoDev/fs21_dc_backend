const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js');

const EditorModel = Conexao.define(
    "EditorModel", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        nacionalidade: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        tableName: 'editores'
    }
)



module.exports = EditorModel;