const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const LokasiKerja = sequelize.define('Lokasi_Kerja', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Nama_Lokasi_Kerja: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = LokasiKerja;