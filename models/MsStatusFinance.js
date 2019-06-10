const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const StatusFinance = sequelize.define('status_finance', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Type_Status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = StatusFinance;