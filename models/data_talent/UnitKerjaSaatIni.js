const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const UnitKerjaSaatIni = sequelize.define('UnitKerjaSaatIni', {
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

module.exports = UnitKerjaSaatIni;