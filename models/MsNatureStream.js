const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const natureStream = sequelize.define('nature_stream', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    natureStream: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = natureStream;