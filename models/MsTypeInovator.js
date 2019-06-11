const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const TypeInovator = sequelize.define('type_Inovator', {
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

module.exports = TypeInovator;