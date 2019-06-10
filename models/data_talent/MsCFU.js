const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const CFU = sequelize.define('MsCFU', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    CFU: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = CFU;