const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const FileUpload = sequelize.define('file_upload', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true     
    },
    filePath: Sequelize.STRING,
    fileName: Sequelize.STRING,
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = FileUpload;