const Sequelize = require('sequelize');
require('dotenv').config();

// DB_HOST=localhost
// DB_NAME=amd-db
// DB_USER=root
// DB_PASS=admin
// DB_DIALECT=mysql
// DB_PORT=3306

// Development
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST
});

// DB_HOST=45.64.99.177
// DB_NAME=amddigit_demo_amd
// DB_USER=amddigit_naufal
// DB_PASS=P$ps2xbox
// DB_DIALECT=mysql
// DB_PORT=3306

// Demo deployment
// const sequelize = new Sequelize('amddigit_demo_amd','amddigit_naufal','P$ps2xbox', {
//     dialect: 'mysql',
//     host: '45.64.99.177',
//     port: '3306'
// });

module.exports = sequelize;