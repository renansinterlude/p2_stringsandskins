const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'bdstringsandskins', 
    'root', 
    '123456', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!")
}).catch((error) => {
    console.log("Falha ao se conectar: " + error)
});

