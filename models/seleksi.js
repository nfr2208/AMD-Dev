const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const seleksi = sequelize.define('seleksi', {
    idSeleksi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    jenis_Seleksi: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keputusan: {
        type: Sequelize.TEXT,
        allowNull: false
    }   
});

module.exports = seleksi;