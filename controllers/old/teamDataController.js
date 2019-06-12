const TeamData = require('../../models/team_data');
const FileUpload = require('../../models/file_upload');

const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
})

let upload = multer({
    storage: storage
}).single('teamdata');

exports.getTeamDatas = (req, res, next) => {

    let entry;
    let jsonTeamData;

    let totalTeamData;
    let activeTeamData;
    let notActiveTeamData;

    let alumniTeamData;
    let activeTalentTeamData;
    let moveTeamData;

    let fullTeamData;
    let fsTeamData;
    let onBootcampTeamData;
    let notJoinTeamData;

    TeamData.findAll({
        limit: 1,
        order: [[ 'updatedAt', 'DESC' ]]
    }).then(entries => {
        entry = entries[0];
        return TeamData.findAll({
            raw: true
        })
    }).then(teamdata => {
        jsonTeamData = teamdata;
        return TeamData.count();
    }).then(total => {
        totalTeamData = total;
        return TeamData.count({
            where: {
                status: 1
            }
        });
    }).then(active => {
        activeTeamData = active;
        return TeamData.count({
            where: {
                status: 0
            }
        });
    }).then(notActive => {
        notActiveTeamData = notActive;
        return TeamData.count({
            where: {
                flagging: 'ALUMNI'
            }
        });
    }).then(alumni => {
        alumniTeamData = alumni;
        return TeamData.count({
            where: {
                flagging: 'ACTIVE TALENT'
            }
        });
    }).then(activeTalent => {
        activeTalentTeamData = activeTalent;
        return TeamData.count({
            where: {
                flagging: 'MOVE TEAM'
            }
        });
    }).then(moveTeam => {
        moveTeamData = moveTeam;
        return TeamData.count({
            where: {
                tipe_inovator: '100%'
            }
        });
    }).then(full => {
        fullTeamData = full;
        return TeamData.count({
            where: {
                tipe_inovator: '40/60'
            }
        });
    }).then(fs => {
        fsTeamData = fs;
        return TeamData.count({
            where: {
                tipe_inovator: 'Bootcamp'
            }
        });
    }).then(bootcamp => {
        onBootcampTeamData = bootcamp;
        return TeamData.count({
            where: {
                tipe_inovator: 'NotJoin'
            }
        });
    }).then(notJoin => {
        notJoinTeamData = notJoin;
        res.render('data_talent/view-team-data', {
            jsonTeamData: jsonTeamData,
            entry: entry,
            totalTeamData: totalTeamData,
            activeTeamData: activeTeamData,
            notActiveTeamData: notActiveTeamData,
            alumniTeamData: alumniTeamData,
            activeTalentTeamData: activeTalentTeamData,
            moveTeamData: moveTeamData,
            fullTeamData: fullTeamData,
            fsTeamData: fsTeamData,
            onBootcampTeamData: onBootcampTeamData,
            notJoinTeamData: notJoinTeamData,
            pageTitle: "View Team Data"
        });
    }).catch(err => {
        console.log(err);
    });
    
};

exports.postUploadTeamData = (req, res, next) => {
    upload(req, res, (err) => {
        if(err){
            console.log(err);
        }else{
            const filepath = path.normalize(req.file.destination + '/' + req.file.originalname);
            const filename = req.file.originalname;
            const description = req.body.description;
            FileUpload.create({
                filePath: filepath,
                fileName: filename,
                description: description
            });

            if(typeof require !== 'undefined') XLSX = require('xlsx');
            let workbook = XLSX.readFile(filepath);
            let sheetNames = workbook.SheetNames;

            let sheetIndex = 1;

            let df = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[sheetIndex-1]]);
            // console.log(df);

            TeamData.destroy({ truncate: { cascade: true } });
            TeamData.bulkCreate(df).then(result =>{
                res.redirect('/data-talent/view-team-data');
            }).catch();
        }
    })
};

exports.getAddDataTalent = (req, res, next) => {
    res.render('data_talent/add-data-talent', {
        path: '/add-data-talent',
        pageTitle: 'Add Data Talent',
        editing: false
    });
};

exports.postAddDataTalent = (req, res, next) => {
    const id_peserta = req.body.id_peserta;
    const nama = req.body.nama;
    const nama_tim = req.body.nama_tim;
    const batch_inovation = req.body.batch_inovation;
    const status = req.body.status;
    const nik = req.body.nik;
    const bp = req.body.bp;
    const flagging = req.body.flagging;
    const tipe_inovator = req.body.tipe_inovator;
    const tim_struktur = req.body.tim_struktur;
    const c_level = req.body.c_level;
    const unit_kerja_asal = req.body.unit_kerja_asal;
    const loker_asal = req.body.loker_asal;
    const unit_kerja_saat_ini = req.body.unit_kerja_saat_ini;
    const loker_saat_ini = req.body.loker_saat_ini;
    const no_telp = req.body.no_telp;
    const email = req.body.email;
    TeamData.create({
        id_peserta: id_peserta,
        nama: nama,
        nama_tim: nama_tim,
        batch_inovation: batch_inovation,
        status: status,
        nik: nik,
        bp: bp,
        flagging: flagging,
        tipe_inovator: tipe_inovator,
        tim_struktur: tim_struktur,
        c_level: c_level,
        unit_kerja_asal: unit_kerja_asal,
        loker_asal: loker_asal,
        unit_kerja_saat_ini: unit_kerja_saat_ini,
        loker_saat_ini: loker_saat_ini,
        no_telp: no_telp,
        email: email
    }).then(result => {
        res.redirect('/data-talent/view-team-data');
    }).catch(err => {
        console.log(err);
    });
};

exports.getEditDataTalent = (req, res, next) => {
    editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    id = req.params.id;
    TeamData.findByPk(id)
        .then(teamdata => {
            if (!teamdata) {
                return res.redirect('/data-talent/view-team-data');
            }
            res.render('data_talent/add-data-talent', {
                path: '/add-data-talent',
                pageTitle: 'Edit Data Talent',
                editing: editMode,
                teamdata: teamdata
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postEditDataTalent = (req, res, next) => {
    const id = req.body.idTeamdata;
    const id_peserta = req.body.id_peserta;
    const nama = req.body.nama;
    const nama_tim = req.body.nama_tim;
    const batch_inovation = req.body.batch_inovation;
    const status = req.body.status;
    const nik = req.body.nik;
    const bp = req.body.bp;
    const flagging = req.body.flagging;
    const tipe_inovator = req.body.tipe_inovator;
    const tim_struktur = req.body.tim_struktur;
    const c_level = req.body.c_level;
    const unit_kerja_asal = req.body.unit_kerja_asal;
    const loker_asal = req.body.loker_asal;
    const unit_kerja_saat_ini = req.body.unit_kerja_saat_ini;
    const loker_saat_ini = req.body.loker_saat_ini;
    const no_telp = req.body.no_telp;
    const email = req.body.email;
    TeamData.findByPk(id)
        .then(teamdata => {
            teamdata.id_peserta = id_peserta,
            teamdata.nama = nama,
            teamdata.nama_tim = nama_tim,
            teamdata.batch_inovation = batch_inovation,
            teamdata.status = status,
            teamdata.nik = nik,
            teamdata.bp = bp,
            teamdata.flagging = flagging,
            teamdata.tipe_inovator = tipe_inovator,
            teamdata.tim_struktur = tim_struktur,
            teamdata.c_level = c_level,
            teamdata.unit_kerja_asal = unit_kerja_asal,
            teamdata.loker_asal = loker_asal,
            teamdata.unit_kerja_saat_ini = unit_kerja_saat_ini,
            teamdata.loker_saat_ini = loker_saat_ini,
            teamdata.no_telp = no_telp,
            teamdata.email = email,
            teamdata.updatedAt = Date.now()
            return teamdata.save();
        })
        .then(result => {
            res.redirect('/data-talent/view-team-data');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postDeleteDataTalent = (req, res, next) => {
    const id = req.body.id;
    TeamData.findByPk(id)
        .then(teamdata => {
            return teamdata.destroy();
        })
        .then(result => {
            res.redirect('/data-talent/view-team-data');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getProfile = (req, res, next) => {
    res.render('data_talent/profile', {
        path: '/profile',
        pageTitle: 'Profile'
    });
};