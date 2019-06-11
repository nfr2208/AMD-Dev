const Sequelize = require ('sequelize');

const sequelize = require ('../util/database');

const UnitKerja = sequelize.define('unit_kerja', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nama_unit_kerja: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = UnitKerja;