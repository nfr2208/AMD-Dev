const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Flagging = sequelize.define('Flagging', {
    Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Flagging: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Flagging;