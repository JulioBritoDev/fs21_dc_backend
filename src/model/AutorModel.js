const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js');

const AutorModel = Conexao.define(
    "AutorModel", 
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
        tableName: 'autores'
    }
)

module.exports = AutorModel;