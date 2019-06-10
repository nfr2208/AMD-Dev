const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const FU = sequelize.define('MsFU', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaKey: true,
        autoIncrement: true
    },
    FU: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = FU;