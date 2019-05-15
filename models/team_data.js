const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const TeamData = sequelize.define('team_data', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_peserta: {
        type: Sequelize.STRING
    },
    nama_tim: {
        type: Sequelize.STRING
    },
    batch_inovation: {
        type: Sequelize.STRING  
    },
    nik: {
        type: Sequelize.STRING
    },
    bp: {
        type: Sequelize.STRING
    },
    nama: {
        type: Sequelize.STRING
    },
    nature_stream: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    flagging: {
        type: Sequelize.STRING
    },
    tipe_inovator: {
        type: Sequelize.STRING
    },
    tim_struktur: {
        type: Sequelize.STRING
    },
    c_level: {
        type: Sequelize.STRING
        
    },
    tgl_join_tim: {
        type: Sequelize.STRING
        
    },
    unit_kerja_asal: {
        type: Sequelize.STRING
    },
    loker_asal: {
        type: Sequelize.STRING
    },
    unit_kerja_saat_ini: {
        type: Sequelize.STRING
    },
    loker_saat_ini: {
        type: Sequelize.STRING
    },
    no_telp: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
});

module.exports = TeamData;