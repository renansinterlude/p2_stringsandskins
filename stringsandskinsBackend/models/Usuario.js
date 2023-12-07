const db = require('./db');

const Usuario = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
});

// Usuario.sync({force: true});



module.exports = Usuario;