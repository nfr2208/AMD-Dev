const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const monev_SR = sequelize.define('Monev_SR', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Movev: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Sprint_Review: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Jenis_SR: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = monev_SR;