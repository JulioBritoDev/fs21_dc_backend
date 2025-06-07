const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js');
const AutorModel = require('./AutorModel.js');
const EditorModel = require('./EditorModel.js');

const LivroModel = Conexao.define(
    "LivroModel", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        ano: {
            type: DataTypes.STRING,
            allowNull: false
        },
        autor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: 'id',
                model: AutorModel
            }
        },
        editor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: 'id',
                model: EditorModel
            }
        },
    }, 
    {
        tableName: 'livros'
    }
)


AutorModel.hasMany(LivroModel, {
    foreignKey: 'autor_id'
});

LivroModel.belongsTo(AutorModel, {
    foreignKey: 'autor_id',
    as: 'autor' // <-- esse "as" precisa ser igual ao usado no include
});

// ---------------------------------------------------

EditorModel.hasMany(LivroModel, {
    foreignKey: 'editor_id'
});

LivroModel.belongsTo(EditorModel, {
    foreignKey: 'editor_id',
    as: 'editor'
});

module.exports = LivroModel;
