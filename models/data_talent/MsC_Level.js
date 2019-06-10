const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const C_Level = sequelize.define('MsC_Level', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    CLevel: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = C_Level;