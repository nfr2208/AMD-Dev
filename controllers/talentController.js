const Talent = require('../models/data_talent/Talent');
const Flagging = require('../models/data_talent/Flagging');
const UnitKerjaAsal = require('../models/data_talent/UnitKerjaAsal');
const UnitKerjaSaatIni = require('../models/data_talent/UnitKerjaSaatIni');
const Amoeba = require('../models/amoeba/Amoeba');

exports.getTalentsAPI = (req, res, next) => {
    Talent.findAll({
        include: [{
            model: Flagging,
            attributes: ['Flagging']
        },{
            model: UnitKerjaAsal,
            attributes: ['Tempat']
        },{
            model: UnitKerjaSaatIni,
            attributes: ['Tempat']
        },{
            model: Amoeba,
            attributes: ['Nama']
        }],
        // raw: true
    }).then(talents => {
        const resObj = talents.map(talent => {
            return Object.assign(
                {},
                {
                    Id: talent.id,
                    BatchInovation: talent.BatchInovation,
                    NIK: talent.NIK,
                    BP: talent.BP,
                    Nama: talent.Nama,
                    NatureStream: talent.NatureStream,
                    Status: talent.Status,
                    TipeInovator: talent.TipeInovator,
                    TimStruktur: talent.TimStruktur,
                    CLevel: talent.CLevel,
                    TglJoinTim: talent.TglJoinTim,
                    LokerAsal: talent.LokerAsal,
                    LokerSaatIni: talent.LokerSaatIni,
                    NoTelp: talent.NoTelp,
                    FlaggingId: talent.FlaggingId,
                    Flagging: talent.Flagging.Flagging,
                    UnitKerjaAsalId: talent.UnitKerjaAsalId,
                    UnitKerjaAsal: talent.UnitKerjaAsal.Tempat,
                    UnitKerjaSaatIniId: talent.UnitKerjaSaatIniId,
                    UnitKerjaSaatIni: talent.UnitKerjaSaatIni.Tempat,
                    AmoebaId: talent.AmoebaId,
                    NamaAmoeba: talent.Amoeba.Nama
                }
            )
        })
        res.json(resObj);
    }).catch(err => {
        console.log(err);
    });
};

exports.getTalents = (req, res, next) => {
    let resObj;

    Talent.findAll({
        include: [{
            model: Flagging,
            attributes: ['Flagging']
        },{
            model: UnitKerjaAsal,
            attributes: ['Tempat']
        },{
            model: UnitKerjaSaatIni,
            attributes: ['Tempat']
        },{
            model: Amoeba,
            attributes: ['Nama']
        }],
        // raw: true
    }).then(talents => {
        resObj = talents.map(talent => {
            return Object.assign(
                {},
                {
                    Id: talent.id,
                    BatchInovation: talent.BatchInovation,
                    NIK: talent.NIK,
                    BP: talent.BP,
                    Nama: talent.Nama,
                    NatureStream: talent.NatureStream,
                    Status: talent.Status,
                    TipeInovator: talent.TipeInovator,
                    TimStruktur: talent.TimStruktur,
                    CLevel: talent.CLevel,
                    TglJoinTim: talent.TglJoinTim,
                    LokerAsal: talent.LokerAsal,
                    LokerSaatIni: talent.LokerSaatIni,
                    NoTelp: talent.NoTelp,
                    FlaggingId: talent.FlaggingId,
                    Flagging: talent.Flagging.Flagging,
                    UnitKerjaAsalId: talent.UnitKerjaAsalId,
                    UnitKerjaAsal: talent.UnitKerjaAsal.Tempat,
                    UnitKerjaSaatIniId: talent.UnitKerjaSaatIniId,
                    UnitKerjaSaatIni: talent.UnitKerjaSaatIni.Tempat,
                    AmoebaId: talent.AmoebaId,
                    NamaAmoeba: talent.Amoeba.Nama
                }
            )
        })
        return Talent.findAll({
            limit: 1,
            order: [[ 'updatedAt', 'DESC' ]]
        });
    }).then(entry => {
        res.render('data_talent/list-talent', {
            entry: entry[0],
            jsonTalent: resObj,
            path: '/talent/list-talent',
            pageTitle: 'List of Talent'
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.getAddTalent = (req, res, next) => {
    res.render('data_talent/add-talent', {
        path: '/talent/add-talent',
        pageTitle: 'Add Talent'
    });
};

exports.postAddTalent = (req, res, next) => {
    const BatchInovation = req.body.BatchInovation;
    const NIK = req.body.NIK;
    const Nama = req.body.Nama;
    const NoTelp = req.body.NoTelp;
    const Email = req.body.Email;
    const TglJoinTim = req.body.TglJoinTim;
    const BP = req.body.BP;
    const NatureStream = req.body.NatureStream;
    const CLevel = req.body.CLevel;
    const TipeInovator = req.body.TipeInovator;
    const TimStruktur = req.body.TimStruktur;
    const FlaggingId = req.body.FlaggingId;
    const Status = req.body.Status;
    const LokerAsal = req.body.LokerAsal;
    const LokerSaatIni = req.body.LokerSaatIni;
    const UnitKerjaAsalId = req.body.UnitKerjaAsalId;
    const UnitKerjaSaatIniId = req.body.UnitKerjaSaatIniId;

    Talent.create({
        BatchInovation: BatchInovation,
        NIK: NIK,
        Nama: Nama,
        NoTelp: NoTelp,
        Email: Email,
        TglJoinTim: TglJoinTim,
        BP: BP,
        NatureStream: NatureStream,
        CLevel: CLevel,
        TipeInovator: TipeInovator,
        TimStruktur: TimStruktur,
        FlaggingId: FlaggingId,
        Status: Status,
        LokerAsal: LokerAsal,
        LokerSaatIni: LokerSaatIni,
        UnitKerjaAsalId: UnitKerjaAsalId,
        UnitKerjaSaatIniId: UnitKerjaSaatIniId,
        AmoebaId: null
    }).then(result => {
        res.redirect('/talent/list-talent');
    }).catch(err => {
        console.log(err);
    });
};

exports.getTalentProfile = (req, res, next) => {
    res.render('data_talent/profile-talent', {
        path: '/talent/profile-talent',
        pageTitle: 'Profile Talent'
    });
};