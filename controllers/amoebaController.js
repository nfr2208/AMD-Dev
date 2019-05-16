const Amoeba = require('../models/amoeba');
const Innovator = require('../models/innovator');
const FileUpload = require('../models/file_upload');

const multer = require('multer');
const path = require('path');

// File Upload Storage
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

exports.getRegisterAmoeba = (req, res, next) => {
    res.render('register-amoeba', {
        path: '/register-amoeba',
        pageTitle: 'Register Amoeba',
        editing: false
    });
};

exports.getEditAmoeba = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const amoebaId = req.params.idAmoeba;
    Amoeba.findByPk(amoebaId)
        .then(amoeba => {
            if (!amoeba) {
                return res.redirect('/')
            }
            res.render('register-amoeba', {
                path: '/edit-amoeba',
                pageTitle: 'Edit Amoeba',
                editing: editMode,
                amoeba: amoeba
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postEditAmoeba = (req, res, next) => {
    const idAmoeba = req.body.idAmoeba;
    const namaAmoeba = req.body.namaAmoeba;
    const deskripsi1 = req.body.deskripsi1;
    const deskripsi2 = req.body.deskripsi2;
    const statusAmoeba = req.body.statusAmoeba;
    const currentPhase = req.body.currentPhase;
    const batch = req.body.batch;
    const incbAcc = req.body.incbAcc;
    const tipeInovasi = req.body.tipeInovasi;
    const areaInovasi = req.body.areaInovasi;
    const dtp = req.body.dtp;
    const mappingPilarDDS = req.body.mappingPilarDDS;
    const mappingCFU = req.body.mappingCFU;
    const core = req.body.core;
    const ecosystem = req.body.ecosystem;
    Amoeba.findByPk(idAmoeba)
        .then(amoeba => {
            amoeba.namaAmoeba = namaAmoeba;
            amoeba.deskripsi1 = deskripsi1;
            amoeba.deskripsi2 = deskripsi2;
            amoeba.statusAmoeba = statusAmoeba;
            amoeba.currentPhase = currentPhase;
            amoeba.batch = batch;
            amoeba.incbAcc = incbAcc;
            amoeba.tipeInovasi = tipeInovasi;
            amoeba.areaInovasi = areaInovasi;
            amoeba.dtp = dtp;
            amoeba.mappingPilarDDS = mappingPilarDDS;
            amoeba.mappingCFU = mappingCFU;
            amoeba.core = core;
            amoeba.ecosystem = ecosystem;
            return amoeba.save();
        })
        .then(result => {
            res.redirect('/view-amoeba');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postDeleteAmoeba = (req, res, next) => {
    const idAmoeba = req.body.idAmoeba;
    Amoeba.findByPk(idAmoeba)
        .then(amoeba => {
            return amoeba.destroy();
        })
        .then(result => {
            res.redirect('/view-amoeba');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postRegisterAmoeba = (req, res, next) => {
    const idAmoeba = req.body.idAmoeba;
    const namaAmoeba = req.body.namaAmoeba;
    const deskripsi1 = req.body.deskripsi1;
    const deskripsi2 = req.body.deskripsi2;
    const statusAmoeba = req.body.statusAmoeba;
    const currentPhase = req.body.currentPhase;
    const batch = req.body.batch;
    const incbAcc = req.body.incbAcc;
    const tipeInovasi = req.body.tipeInovasi;
    const areaInovasi = req.body.areaInovasi;
    const dtp = req.body.dtp;
    const mappingPilarDDS = req.body.mappingPilarDDS;
    const mappingCFU = req.body.mappingCFU;
    const core = req.body.core;
    const ecosystem = req.body.ecosystem;
    Amoeba.create({
        idAmoeba: idAmoeba,
        namaAmoeba: namaAmoeba,
        deskripsi1: deskripsi1,
        deskripsi2: deskripsi2,
        statusAmoeba: statusAmoeba,
        currentPhase: currentPhase,
        batch: batch,
        incbAcc: incbAcc,
        tipeInovasi: tipeInovasi,
        areaInovasi: areaInovasi,
        dtp: dtp,
        mappingPilarDDS: mappingPilarDDS,
        mappingCFU: mappingCFU,
        core: core,
        ecosystem: ecosystem
    }).then(result => {
        // console.log(result);
        console.log("Created Innovator");
        res.redirect('/view-amoeba');
    }).catch(err => {
        console.log(err);
    });
};

exports.getDetailAmoeba = (req, res, next) => {
    const amoebaId = req.params.idAmoeba;
    // Amoeba.findAll({
    //     where: {idAmoeba: amoebaId}
    // }).then(amoeba => {
    //     res.render('detail-amoeba', {
    //         path: '/detail-amoeba',
    //         pageTitle: 'Detail Amoeba',
    //         amoeba: amoeba[0]
    //     });
    // }).catch(
    //     err => console.log(err)
    // );
    // Amoeba.findByPk(amoebaId)
    //     .then(amoeba => {
    //         res.render('detail-amoeba', {
    //             path: '/detail-amoeba',
    //             pageTitle: 'Detail Amoeba',
    //             amoeba: amoeba
    //         });
    //     })
    //     .catch(
    //         err => console.log(err)
    //     );

    let fetchedAmoeba;
    Amoeba.findByPk(amoebaId)
        .then(amoeba => {
            fetchedAmoeba = amoeba;
            return Innovator.findAll({
                where: {
                    amoebaIdAmoeba: amoebaId
                }
            })
        })
        .then(innovator => {
            res.render('detail-amoeba', {
                path: '/detail-amoeba',
                pageTitle: 'Detail Amoeba',
                amoeba: fetchedAmoeba,
                innovators: innovator
            });
        })
        .catch(
            err => console.log(err)
        );
}

exports.getAmoebas = (req, res, next) => {

    // Amoeba.findAll().then(amoebas => {
    //     amoebas = amoebas;
    //     res.render('view-amoeba', {
    //         amoebas: amoebas,
    //         pageTitle: 'View Amoeba',
    //         path: '/view-amoeba'
    //     });
    // }).catch(err => {
    //     console.log(err);
    // });

    // Status
    let activeAmoebas, notActiveAmoebas, totalAmoeba;

    // Phase
    Amoeba.count({
            where: {
                statusAmoeba: 'Aktif'
            }
        }).then(active => {
            activeAmoebas = active;
            totalAmoeba = parseInt(activeAmoebas, 10);
            return Amoeba.count({
                where: {
                    statusAmoeba: 'Tidak aktif'
                }
            });
        }).then(notActive => {
            notActiveAmoebas = notActive;
            totalAmoeba += parseInt(notActiveAmoebas, 10);
            return Amoeba.count({
                where: {
                    currentPhase: 'CV'
                }
            });
        }).then(cvs => {
            cv = cvs;
            return Amoeba.count({
                where: {
                    currentPhase: 'PV'
                }
            });
        }).then(pvs => {
            pv = pvs;
            return Amoeba.count({
                where: {
                    currentPhase: 'BMV'
                }
            });
        }).then(bmvs => {
            bmv = bmvs;
            return Amoeba.count({
                where: {
                    currentPhase: 'MV'
                }
            });
        })
        .then(mvs => {
            mv = mvs;
            return Amoeba.findAll({
                raw: true
            })
        }).then(amoeba => {
            res.render('view-amoeba', {
                active: activeAmoebas,
                notActive: notActiveAmoebas,
                total: totalAmoeba,
                amoebas: amoeba,
                cv: cv,
                pv: pv,
                bmv: bmv,
                mv: mv,
                pageTitle: 'View Amoeba',
                path: '/view-amoeba'
            });
        }).catch(err => {
            console.log(err);
        });
};

exports.getAmoebasApi = (req, res, next) => {
    Amoeba.findAll({
        raw: true,
    }).then(amoeba => {
        res.json(amoeba);
    }).catch(err => {
        console.log(err);
    });
};

exports.postUploadAmoeba = (req, res, next) => {
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

            Amoeba.destroy({ truncate: { cascade: true } });
            Amoeba.bulkCreate(df).then(result =>{
                res.redirect('/view-team-data');
            }).catch(err => console.log(err));
        }
    })
};