const Sequelize = require('sequelize');

// conexão com o banco de dados MySQL
const sequelize = new Sequelize('stringsandskins', 'root', 'omae1515', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
