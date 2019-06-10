const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Tribe = sequelize.define('MsTribe', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Tribe: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Tribe;