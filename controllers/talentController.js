const Talent = require('../models/talent/Talent');
const Flagging = require('../models/talent/Flagging');
const UnitKerjaAsal = require('../models/talent/UnitKerjaAsal');
const UnitKerjaSaatIni = require('../models/talent/UnitKerjaSaatIni');
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
            attributes: ['NamaAmoeba']
        }],
        // raw: true
    }).then(talents => {
        const resObj = talents.map(talent => {
            return Object.assign(
                {},
                {
                    Id: talent.Id,
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
                    Email: talent.Email,
                    FlaggingId: talent.FlaggingId,
                    Flagging: talent.Flagging.Flagging,
                    UnitKerjaAsalId: talent.UnitKerjaAsalId,
                    UnitKerjaAsal: talent.UnitKerjaAsal.Tempat,
                    UnitKerjaSaatIniId: talent.UnitKerjaSaatIniId,
                    UnitKerjaSaatIni: talent.UnitKerjaSaatIni.Tempat,
                    AmoebaId: talent.AmoebaId,
                    NamaAmoeba: talent.Amoeba.NamaAmoeba
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
            attributes: ['NamaAmoeba']
        }]
    }).then(talents => {
        resObj = talents.map(talent => {
            return Object.assign(
                {},
                {
                    Id: talent.Id,
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
                    Email: talent.Email,
                    FlaggingId: talent.FlaggingId,
                    Flagging: talent.Flagging.Flagging,
                    UnitKerjaAsalId: talent.UnitKerjaAsalId,
                    UnitKerjaAsal: talent.UnitKerjaAsal.Tempat,
                    UnitKerjaSaatIniId: talent.UnitKerjaSaatIniId,
                    UnitKerjaSaatIni: talent.UnitKerjaSaatIni.Tempat,
                    AmoebaId: talent.AmoebaId,
                    NamaAmoeba: talent.Amoeba.NamaAmoeba
                }
            )
        });
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
    Amoeba.findAll({
        raw: true
    }).then(amoebas => {
        res.render('data_talent/add-talent', {
            jsonAmoeba: amoebas,
            path: '/talent/add-talent',
            pageTitle: 'Add Talent'
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.postAddTalent = (req, res, next) => {
    const NIK = req.body.NIK;
    const Nama = req.body.Nama;
    const NoTelp = req.body.NoTelp;
    const Email = req.body.Email;
    const BatchInovation = req.body.BatchInovation;
    const AmoebaId = req.body.AmoebaId;
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
        NIK: NIK,
        Nama: Nama,
        NoTelp: NoTelp,
        Email: Email,
        BatchInovation: BatchInovation,
        AmoebaId: AmoebaId,
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
    }).then(result => {
        res.redirect('/talent/list-talent');
    }).catch(err => {
        console.log(err);
    });
};

exports.getTalentProfile = (req, res, next) => {
    let resObj;

    Id = req.params.Id;
    Talent.findAll({
        where: {
            Id: Id
        },
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
            attributes: ['NamaAmoeba']
        }],
    }).then(talents => {
        resObj = talents.map(talent => {
            return Object.assign(
                {},
                {
                    Id: talent.Id,
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
                    Email: talent.Email,
                    FlaggingId: talent.FlaggingId,
                    Flagging: talent.Flagging.Flagging,
                    UnitKerjaAsalId: talent.UnitKerjaAsalId,
                    UnitKerjaAsal: talent.UnitKerjaAsal.Tempat,
                    UnitKerjaSaatIniId: talent.UnitKerjaSaatIniId,
                    UnitKerjaSaatIni: talent.UnitKerjaSaatIni.Tempat,
                    AmoebaId: talent.AmoebaId,
                    NamaAmoeba: talent.Amoeba.NamaAmoeba
                }
            )
        })
        res.render('data_talent/profile-talent', {
            pageTitle: 'Profile Talent - '+ resObj[0].Nama +'',
            talent: resObj[0]
        })
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditTalent = (req, res, next) => {

    const Id = req.body.Id;
    const NIK = req.body.NIK;
    const Nama = req.body.Nama;
    const NoTelp = req.body.NoTelp;
    const Email = req.body.Email;
    const BatchInovation = req.body.BatchInovation;
    const AmoebaId = req.body.AmoebaId;
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

    Talent.findByPk(Id)
        .then(talent => {
            talent.NIK = NIK,
            talent.Nama = Nama,
            talent.NoTelp = NoTelp,
            talent.Email = Email,
            talent.BatchInovation = BatchInovation,
            talent.AmoebaId = AmoebaId,
            talent.TglJoinTim = TglJoinTim,
            talent.BP = BP,
            talent.NatureStream = NatureStream,
            talent.CLevel = CLevel,
            talent.TipeInovator = TipeInovator,
            talent.TimStruktur = TimStruktur,
            talent.FlaggingId = FlaggingId,
            talent.Status = Status,
            talent.LokerAsal = LokerAsal,
            talent.LokerSaatIni = LokerSaatIni,
            talent.UnitKerjaAsalId = UnitKerjaAsalId,
            talent.UnitKerjaSaatIniId = UnitKerjaSaatIniId,
            talent.updatedAt = Date.now()
            return talent.save();
        }).then(result => {
            res.redirect('/talent/profile-talent/'+ Id);
        }).catch(err => {
            console.log(err);
        })
};