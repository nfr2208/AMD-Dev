const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const UnitKerjaAsal = sequelize.define('UnitKerjaAsal', {
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Tempat: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = UnitKerjaAsal;