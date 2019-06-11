const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Mapping = sequelize.define('mapping', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
});

module.exports = Mapping;