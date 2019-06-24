const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Amoeba = sequelize.define('Amoeba', {
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NamaAmoeba: {
        type: Sequelize.STRING,
        allowNull: false
    },
    BatchAmoeba: {
        type: Sequelize.STRING,
        allowNull: false
    },
    StatusAmoeba: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    IncbAcc: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    TipeInovasi: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Deskripsi: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    DeskripsiFF: Sequelize.TEXT,
    LinkedIn: Sequelize.STRING,
    Facebook: Sequelize.STRING,
    Twitter: Sequelize.STRING,
    Instagram: Sequelize.STRING,
    Youtube: Sequelize.STRING,
    Website: Sequelize.STRING,
    Other: Sequelize.TEXT
    
});

module.exports = Amoeba;