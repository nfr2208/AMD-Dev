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
    currentPhase: {
        type: Sequelize.STRING,
        allowNull: false
    },
    batch: {
        type: Sequelize.STRING,
        allowNull: false
    },
    incbAcc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipeInovasi: {
        type: Sequelize.STRING,
        allowNull: false
    },
    areaInovasi: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dtp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mappingPilarDDS: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mappingCFU: {
        type: Sequelize.STRING,
        allowNull: false
    },
    core: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ecosystem: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Amoeba;