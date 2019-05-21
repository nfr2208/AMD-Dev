const TeamData = require('../models/team_data');
const FileUpload = require('../models/file_upload');

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

    if(!req.session.isLoggedIn){
        return res.redirect('/login');
    }

    let entry;

    FileUpload.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
    }).then(entries => {
        entry = entries[0];
        return TeamData.findAll({
            raw: true
        })
    }).then(teamdata => {
        res.render('view-team-data', {
            jsonTeamData: teamdata,
            entry: entry,
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
                res.redirect('/view-team-data');
            }).catch();
        }
    })
};

exports.getAddDataTalent = (req, res, next) => {
    res.render('add-data-talent', {
        path: '/add-data-talent',
        pageTitle: 'Add Data Talent',
        editing: false
    });
};