const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const Peserta = sequelize.define('MsPeserta', {
    id: {
        tyepe: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NIK: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Nama_Peserta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Jabatan: {
        type: Sequelize.STRING
    },
    Band_Position: {
        type: Sequelize.STRING,
        allowNull: false
    },
    No_Telpon_Peserta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email_Peserta: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ID_Unit_Kerja: {
        //foreign key in MsUnitKerja Table
        type: Sequelize.INTEGER
    },
    ID_Lokasi_Kerja: {
        //foreign key in MsLokasiKerja Table
        type: Sequelize.INTEGER
    },
    Nama_Atasan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Jabatan_Atasan: {
        type: Sequelize.STRING,
        allowNull: false
    }
});



module.exports = Peserta;