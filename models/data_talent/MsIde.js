const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Ide = sequelize.define('MsIde', {
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Nama_Ide: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Deskripsi_Ide: {
        type: Sequelize.TEXT
    }
});

module.exports = Ide;