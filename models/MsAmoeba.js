const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Amoeba = sequelize.define('amoeba', {
    idAmoeba: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    namaAmoeba: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deskripsi1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deskripsi2: Sequelize.STRING,
    statusAmoeba: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keterangan: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Amoeba;