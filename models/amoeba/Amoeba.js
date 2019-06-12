const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Amoeba = sequelize.define('Amoeba', {
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Nama: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Amoeba;