const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const pilarDDS = sequelize.define('pilarDDS', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    pilarDDS: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = pilarDDS;