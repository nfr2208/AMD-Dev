const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const MaturityLevel = sequelize.define('maturity_level', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primayKey: true,
        autoIncrement: true
    },
    Maturity_Level: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Keterangan: {
        type: Sequelize.TEXT
    }
});

module.exports = MaturityLevel;