
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    resetToken: Sequelize.STRING,
    resetTokenExpiration: Sequelize.DATE,
    createPasswordToken: Sequelize.STRING,
    createPasswordTokenExpiration: Sequelize.DATE,
    role: Sequelize.STRING,
    password: Sequelize.STRING
});

module.exports = User;