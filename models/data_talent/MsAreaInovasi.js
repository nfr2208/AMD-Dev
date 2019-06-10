const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const AreaInovasi = sequelize.define('MsArea_Inovasi', {
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