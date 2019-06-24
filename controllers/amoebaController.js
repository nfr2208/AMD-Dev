const Flagging = require('../models/talent/Flagging');
const UnitKerjaAsal = require('../models/talent/UnitKerjaAsal');
const UnitKerjaSaatIni = require('../models/talent/UnitKerjaSaatIni');
const Amoeba = require('../models/amoeba/Amoeba');
const AreaInovasi = require('../models/amoeba/AreaInovasi');
const Tribe = require('../models/amoeba/Tribe');
const Talent = require('../models/talent/Talent');

exports.getAmoebaAPI = (req, res, next) => {
    Amoeba.findAll({
        include: [{
            model: AreaInovasi,
            attributes: ['NamaAreaInovasi']
        },{
            model: Tribe,
            attributes: ['Tribe']
        }],
        // raw: true
    }).then(amoebas => {
        const resObj = amoebas.map(amoeba => {
            return Object.assign(
                {},
                {
                    Id: amoeba.Id,
                    NamaAmoeba: amoeba.NamaAmoeba,
                    BatchAmoeba: amoeba.BatchAmoeba,
                    Status: amoeba.StatusAmoeba,
                    IncbAcc: amoeba.IncbAcc,
                    TipeInovasi: amoeba.TipeInovasi,
                    AreaInovasi: amoeba.AreaInovasi.NamaAreaInovasi,
                    Tribe: amoeba.Tribe.Tribe,
                    Deskripsi: amoeba.Deskripsi,
                    DeskripsiFF: amoeba.DeskripsiFF,
                }
            )
        })
        res.json(resObj);
    }).catch(err => {
        console.log(err);
    });
};

exports.getAddAmoeba = (req, res, next) => {
    res.render('data_amoeba/add-amoeba', {
        path: '/talent/add-talent',
        pageTitle: 'Add Talent'
    });
};

exports.postAddAmoeba = (req, res, next) => {
    const NamaAmoeba = req.body.NamaAmoeba;
    const BatchAmoeba = req.body.BatchAmoeba;
    const AreaInovasiId = req.body.AreaInovasi;
    const TipeInovasi = req.body.TipeInovasi;
    const StatusAmoeba = req.body.StatusAmoeba;
    const IncbAcc = req.body.IncbAcc;
    const Deskripsi = req.body.Deskripsi;
    const DeskripsiFF = req.body.DeskripsiFF;
    const LinkedIn = req.body.LinkedIn;
    const Facebook = req.body.Facebook;
    const Twitter = req.body.Twitter;
    const Instagram = req.body.Instagram;
    const Youtube = req.body.Youtube;
    const Website = req.body.Website;
    const Other = req.body.Other;
    const TribeId = 1;
    
    Amoeba.create({
        NamaAmoeba: NamaAmoeba,
        BatchAmoeba: BatchAmoeba,
        AreaInovasiId: AreaInovasiId,
        TribeId: TribeId,
        TipeInovasi: TipeInovasi,
        StatusAmoeba: StatusAmoeba,
        IncbAcc: IncbAcc,
        Deskripsi: Deskripsi,
        DeskripsiFF: DeskripsiFF,
        LinkedIn: LinkedIn,
        Facebook: Facebook,
        Twitter: Twitter,
        Instagram: Instagram,
        Youtube: Youtube,
        Website: Website,
        Other: Other
    }).then(result => {
        res.redirect('/amoeba/list-amoeba');
    }).catch(err => {
        console.log(err);
    });
};

exports.getAmoebas = (req, res, next) => {
    let resObj;

    Amoeba.findAll({
        include: [{
            model: AreaInovasi,
            attributes: ['NamaAreaInovasi']
        },{
            model: Tribe,
            attributes: ['Tribe']
        }],
    }).then(amoebas => {
        resObj = amoebas.map(amoeba => {
            return Object.assign(
                {},
                {
                    Id: amoeba.Id,
                    NamaAmoeba: amoeba.NamaAmoeba,
                    BatchAmoeba: amoeba.BatchAmoeba,
                    Status: amoeba.StatusAmoeba,
                    IncbAcc: amoeba.IncbAcc,
                    TipeInovasi: amoeba.TipeInovasi,
                    AreaInovasi: amoeba.AreaInovasi.NamaAreaInovasi,
                    Tribe: amoeba.Tribe.Tribe
                }
            )
        });
        return Amoeba.findAll({
            limit: 1,
            order: [[ 'updatedAt', 'DESC' ]]
        });
    }).then(entry => {
        res.render('data_amoeba/list-amoeba', {
            path: '/amoeba/list-amoeba',
            pageTitle: 'List of Amoeba',
            jsonAmoeba: resObj,
            entry: entry[0]
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.getAmoebaProfile = (req, res, next) => {
    let jsonAmoeba;
    let jsonTalents;

    Id = req.params.Id;
    Amoeba.findAll({
        where: {
            Id: Id
        },
        include: [{
            model: AreaInovasi,
            attributes: ['NamaAreaInovasi']
        },{
            model: Tribe,
            attributes: ['Tribe']
        }]
    }).then(amoebas => {
        jsonAmoeba = amoebas.map(amoeba => {
            return Object.assign(
                {},
                {
                    Id: amoeba.Id,
                    NamaAmoeba: amoeba.NamaAmoeba,
                    BatchAmoeba: amoeba.BatchAmoeba,
                    StatusAmoeba: amoeba.StatusAmoeba,
                    IncbAcc: amoeba.IncbAcc,
                    TipeInovasi: amoeba.TipeInovasi,
                    Deskripsi: amoeba.Deskripsi,
                    DeskripsiFF: amoeba.DeskripsiFF,
                    LinkedIn: amoeba.LinkedIn,
                    Facebook: amoeba.Facebook,
                    Twitter: amoeba.Twitter,
                    Instagram: amoeba.Instagram,
                    Youtube: amoeba.Youtube,
                    Website: amoeba.Website,
                    Other: amoeba.Other,
                    AreaInovasiId: amoeba.AreaInovasiId,
                    TribeId: amoeba.TribeId,
                }
            )
        })
        return Talent.findAll({
            where: {
                AmoebaId: Id
            },
            include: [{
                model: UnitKerjaSaatIni,
                attributes: ['Tempat']
            }]
        });
    })
    .then(talents => {
        jsonTalents = talents.map(talent => {
            return Object.assign(
                {},
                {
                    Id: talent.Id,
                    Nama: talent.Nama,
                    CLevel: talent.CLevel,
                    TimStruktur: talent.TimStruktur,
                    LokerSaatIni: talent.LokerSaatIni,
                    UnitKerjaSaatIni: talent.UnitKerjaSaatIni.Tempat,
                }
            )
        });
        res.render('data_amoeba/profile-amoeba', {
            amoeba: jsonAmoeba[0],
            talents: jsonTalents,
            pageTitle: 'Profile Amoeba - '+ jsonAmoeba[0].NamaAmoeba +'',
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditAmoeba = (req, res, next) => {

    const Id = req.body.Id;
    const NamaAmoeba = req.body.NamaAmoeba;
    const BatchAmoeba = req.body.BatchAmoeba;
    const AreaInovasiId = req.body.AreaInovasi;
    const TipeInovasi = req.body.TipeInovasi;
    const StatusAmoeba = req.body.StatusAmoeba;
    const IncbAcc = req.body.IncbAcc;
    const Deskripsi = req.body.Deskripsi;
    const DeskripsiFF = req.body.DeskripsiFF;
    const LinkedIn = req.body.LinkedIn;
    const Facebook = req.body.Facebook;
    const Twitter = req.body.Twitter;
    const Instagram = req.body.Instagram;
    const Youtube = req.body.Youtube;
    const Website = req.body.Website;
    const Other = req.body.Other;
    const TribeId = req.body.Tribe;
    
    Amoeba.findByPk(Id).then(amoeba => {
        amoeba.NamaAmoeba = NamaAmoeba,
        amoeba.BatchAmoeba = BatchAmoeba,
        amoeba.AreaInovasiId = AreaInovasiId,
        amoeba.TribeId = TribeId,
        amoeba.TipeInovasi = TipeInovasi,
        amoeba.StatusAmoeba = StatusAmoeba,
        amoeba.IncbAcc = IncbAcc,
        amoeba.Deskripsi = Deskripsi,
        amoeba.DeskripsiFF = DeskripsiFF,
        amoeba.LinkedIn = LinkedIn,
        amoeba.Facebook = Facebook,
        amoeba.Twitter = Twitter,
        amoeba.Instagram = Instagram,
        amoeba.Youtube = Youtube,
        amoeba.Website = Website,
        amoeba.Other = Other
        return amoeba.save();
    }).then(result => {
        res.redirect('/amoeba/profile-amoeba/'+ Id)
    }).catch(err => {
        console.log(err);
    });
};