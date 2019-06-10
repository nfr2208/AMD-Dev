const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const StatusInovator = sequelize.define('MsStatus_Inovator', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Type_Inovator: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = StatusInovator;
