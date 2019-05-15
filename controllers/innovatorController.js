const Innovator = require('../models/innovator');

exports.getDashboard = (req, res, next) => {
    res.render('index', {
        path: '/',
        pageTitle: 'Dashboard'
    });
};

exports.getInner = (req, res, next) => {
    res.render('inner', {
        path: '/inner',
        pageTitle: 'Inner Dashboard'
    });
};

exports.getRegisterInnovator = (req, res, next) => {
    res.render('register-innovator', {
        path: '/register-innovator',
        pageTitle: 'Register Innovator',
        editing: false
    });
};

exports.postRegisterInnovator = (req, res, next) => {
    const idPeserta = req.body.idPeserta;
    const namaPeserta = req.body.namaPeserta;
    const nik = req.body.nik;
    const bp = req.body.bp;
    const noTelp = req.body.noTelp;
    const emailPeserta = req.body.emailPeserta;
    const natureStream = req.body.natureStream;
    const statusInnovator = req.body.statusInnovator;
    const unit = req.body.unit;
    const loker = req.body.loker;
    const timStruktur = req.body.timStruktur;
    const cLevel = req.body.cLevel;
    Innovator.create({
        idPeserta: idPeserta,
        namaPeserta: namaPeserta,
        nik: nik,
        bp: bp,
        noTelp: noTelp,
        emailPeserta: emailPeserta,
        natureStream: natureStream,
        statusInnovator: statusInnovator,
        unit: unit,
        loker: loker,
        timStruktur: timStruktur,
        cLevel: cLevel
    }).then(result => {
        res.redirect('/view-innovator');
    }).catch(err => {
        console.log(err);
    });
};

exports.getInnovators = (req, res, next) => {
    Innovator.findAll().then(innovators => {
        res.render('view-innovator', {
            innovs: innovators,
            pageTitle: 'View Innovator',
            path: '/view-innovator'
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.getEditInnovator = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const pesertaId = req.params.idPeserta;
    Innovator.findByPk(pesertaId)
        .then(innovator => {
            if (!innovator) {
                return res.redirect('/')
            }
            res.render('register-innovator', {
                path: '/edit-innovator',
                pageTitle: 'Edit Innovator',
                editing: editMode,
                innovator: innovator
            });
        }).catch(err => {
            console.log(err);
        });
};

exports.postEditInnovator = (req, res, next) => {
    const idPeserta = req.body.idPeserta;
    const namaPeserta = req.body.namaPeserta;
    const nik = req.body.nik;
    const bp = req.body.bp;
    const noTelp = req.body.noTelp;
    const emailPeserta = req.body.emailPeserta;
    const natureStream = req.body.natureStream;
    const statusInnovator = req.body.statusInnovator;
    const unit = req.body.unit;
    const loker = req.body.loker;
    const timStruktur = req.body.timStruktur;
    const cLevel = req.body.cLevel;
    Innovator.findByPk(idPeserta)
    .then(innovator => {
        innovator.namaPeserta = namaPeserta;
        innovator.nik = nik;
        innovator.bp = bp;
        innovator.noTelp = noTelp;
        innovator.emailPeserta = emailPeserta;
        innovator.natureStream = natureStream;
        innovator.statusInnovator = statusInnovator;
        innovator.unit = unit;
        innovator.loker = loker;
        innovator.timStruktur = timStruktur;
        innovator.cLevel = cLevel;
        return innovator.save();
    })
    .then(result => {
        console.log("UPDATED PRODUCT");
        res.redirect('/view-innovator');
    })
    .catch(err => {
        console.log(err);
    });
};

exports.postDeleteInnovator = (req, res, next) => {
    const idPeserta = req.body.idPeserta;
    Innovator.findByPk(idPeserta)
    .then(innovator => {
        return innovator.destroy();
    })
    .then(result => {
        console.log("DESTROY PRODUCT");
        res.redirect('/view-innovator');
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getDetailInnovator = (req, res, next) => {
    const pesertaId = req.params.idPeserta;
    // Innovator.findAll({
    //     where: {idPeserta: pesertaId}
    // }).then(innovator => {
    //     res.render('detail-innovator', {
    //         path: '/detail-innovator',
    //         pageTitle: 'Detail Innovator',
    //         innovator: innovator[0]
    //     });
    // }).catch(
    //     err => console.log(err)
    // );
    let fetchedInnovator;
    Innovator.findByPk(pesertaId)
        .then(innovator => {
            fetchedInnovator = innovator;    
            return innovator.getAmoeba()
        })
        .then(amoeba => {
            res.render('detail-innovator', {
                path: '/detail-innovator',
                pageTitle: 'Detail Innovator',
                amoeba: amoeba,
                innovator: fetchedInnovator
            });
        })
        .catch(
            err => console.log(err)
        );

}