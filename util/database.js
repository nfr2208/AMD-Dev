const Sequelize = require('sequelize');

const sequelize = new Sequelize('amd-db','root','admin', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;