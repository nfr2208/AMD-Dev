const Amoeba = require('../models/amoeba');
const Innovator = require('../models/innovator');

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
        console.log("UPDATED PRODUCT");
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
        console.log("DESTROY PRODUCT");
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
            return Innovator.findAll({where: {amoebaIdAmoeba: amoebaId}})
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
    Amoeba.findAll().then(amoebas => {
        res.render('view-amoeba', {
            amoes: amoebas,
            pageTitle: 'View Amoeba',
            path: '/view-amoeba'
        });
    }).catch(err => {
        console.log(err);
    });
};