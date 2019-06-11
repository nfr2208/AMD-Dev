const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Budget = sequelize.define('budget', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    budget_approved: {
        type: Sequelize.STRING,
        allowNull: false
    },
    budget_realesed: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pencairan_budget: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lampiran_Proposal: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Budget;