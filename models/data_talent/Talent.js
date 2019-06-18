const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Talent = sequelize.define('Talent', {
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    BatchInovation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    NIK: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    BP: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Nama: {
        type: Sequelize.STRING,
        allowNull: false
    },
    NatureStream: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    TipeInovator: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TimStruktur: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CLevel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TglJoinTim: {
        type: Sequelize.STRING,
        allowNull: false
    },
    LokerAsal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    LokerSaatIni: {
        type: Sequelize.STRING,
        allowNull: false
    },
    NoTelp: {
        type: Sequelize.STRING,
        allowNull: true        
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Talent;