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
        type: Sequelize.STRING,
        allowNull: false
    }, 
    TypeInovasi: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DeskripsiAmoeba: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    Keterangan: {
        type: Sequelize.TEXT,
        allowNull: false
    }
    
});

module.exports = Amoeba;