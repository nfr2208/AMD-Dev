const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Peserta = sequelize.define('peserta', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NIK: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Nama_Peserta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Jabatan: {
        type: Sequelize.STRING
    },
    Band_Position: {
        type: Sequelize.STRING,
        allowNull: false
    },
    No_Telpon_Peserta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email_Peserta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Nama_Atasan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Jabatan_Atasan: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Peserta;