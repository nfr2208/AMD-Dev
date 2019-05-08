const Sequelize = require('sequelize');

// Development
const sequelize = new Sequelize('amd-db','root','admin', {
    dialect: 'mysql',
    host: 'localhost'
});

// Demo deployment
// const sequelize = new Sequelize('amddigit_demo_amd','amddigit_naufal','P$ps2xbox', {
//     dialect: 'mysql',
//     host: '45.64.99.177',
//     port: '3306'
// });

module.exports = sequelize;