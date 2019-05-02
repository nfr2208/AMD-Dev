const Sequelize = require('sequelize');

const sequelize = new Sequelize('amd-db','root','admin', {
    dialect: 'mysql',
    host: '10.107.30.151'
});

module.exports = sequelize;