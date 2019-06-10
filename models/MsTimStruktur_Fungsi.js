const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const TimStruktur_Fungsi = sequelize.define('tim_struktur_fungsi', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Tim_Struktur_Fungsi: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = TimStruktur_Fungsi;