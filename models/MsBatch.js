const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Batch = sequelize.define('batch', {
    idBatch: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    namaBatch: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Batch;