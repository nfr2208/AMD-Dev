const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Fase = sequelize.define('fase', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tahapan_Fase: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fase_Iterasi: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_Date: {
        type: Sequelize.DATE,
        allowNull: false  
    },
    end_Date: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Fase;