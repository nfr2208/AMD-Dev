const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Innovator = sequelize.define('innovator', {
    idInovator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }, 
    batchInovator:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lampiranND: {
        type: Sequelize.TEXT,
        allowNull: false
    }
    
});

module.exports = Innovator;