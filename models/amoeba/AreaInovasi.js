const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const AreaInovasi = sequelize.define('AreaInovasi', {
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NamaAreaInovasi: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = AreaInovasi;