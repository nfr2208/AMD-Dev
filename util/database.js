const Sequelize = require('sequelize');

const sequelize = new Sequelize('amddigit_demo_amd','amddigit_naufal','P$ps2xbox', {
    dialect: 'mysql',
    host: '45.64.99.177',
    port: '3306'
});

// DB_CONNECTION=mysql
// DB_HOST=45.64.99.177
// DB_PORT=3306
// DB_DATABASE=amddigit_database_amd
// DB_USERNAME=amddigit_betteng
// DB_PASSWORD=SAM##sam2018

module.exports = sequelize;