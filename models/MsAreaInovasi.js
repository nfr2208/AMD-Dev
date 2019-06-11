const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const AreaInovasi = sequelize.define('area_inovasi', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Nama_Area_Inovasi: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = AreaInovasi;