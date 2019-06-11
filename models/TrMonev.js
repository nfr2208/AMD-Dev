const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const TrMonev = sequelize.define('trMonev', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Tanggal_Monev: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Status_Monev: {
        type: Sequelize.STRING,
        allowNull: false
    },
    KPI_Agreement: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    KPI_Achievement: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = TrMonev;