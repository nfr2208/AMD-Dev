const Sequelize = require ('sequelize');

const Sequelize = require ('../util/database');

const UnitKerja = Sequelize.define('unit_kerja', {
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