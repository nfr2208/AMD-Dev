const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Innovator = sequelize.define('innovator', {
    idPeserta: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    namaPeserta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nik: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    noTelp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailPeserta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    natureStream: {
        type: Sequelize.STRING,
        allowNull: false
    },
    statusInnovator: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    loker: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timStruktur: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cLevel: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Innovator;