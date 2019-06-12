
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('User', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nama: Sequelize.STRING,
    Email: Sequelize.STRING,
    ResetToken: Sequelize.STRING,
    ResetTokenExpiration: Sequelize.DATE,
    CreatePasswordToken: Sequelize.STRING,
    CreatePasswordTokenExpiration: Sequelize.DATE,
    Role: Sequelize.STRING,
    Password: Sequelize.STRING
});

module.exports = User;