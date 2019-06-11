const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const FU = sequelize.define('FU', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    FU: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = FU;