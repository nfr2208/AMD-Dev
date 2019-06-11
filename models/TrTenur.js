const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const TrTenur = sequelize.define('trTenur', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Tanggal_Join_Tim: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Tanggal_Keluar_Tim: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = TrTenur;