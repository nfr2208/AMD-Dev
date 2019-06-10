const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const TypeInovasi = sequelize.define('MsTipe_Inovasi', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Type_Inovasi: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = TypeInovasi;