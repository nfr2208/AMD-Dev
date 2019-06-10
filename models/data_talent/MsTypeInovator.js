const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const TypeInovator = sequelize.define('MsTipe_Inovator', {
    id: {
        tyepe: Sequelize.INTEGER,
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