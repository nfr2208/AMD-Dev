const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Flagging = sequelize.define('MsFlagging', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    TypeFlagging: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Flagging;