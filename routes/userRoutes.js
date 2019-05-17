const express = require('express');

const menuController = require('../controllers/menuController');
const amoebaController = require('../controllers/amoebaController');
const innovatorController = require('../controllers/innovatorController');
const teamDataController = require('../controllers/teamDataController');

const router = express.Router();

router.get('/', menuController.getDashboard);
router.get('/index', menuController.getDashboard);
router.get('/inner', menuController.getInner);

//Login
router.get('/login', menuController.getLogin);
router.post('/login', menuController.postLogin);
router.post('/logout', menuController.postLogout);

//Register Innovator
router.get('/register-innovator', innovatorController.getRegisterInnovator);
router.post('/register-innovator', innovatorController.postRegisterInnovator);

//Register Amoeba
router.get('/register-amoeba', amoebaController.getRegisterAmoeba);
router.post('/register-amoeba', amoebaController.postRegisterAmoeba);

//View Innovator
router.get('/view-innovator', innovatorController.getInnovators);
router.get('/edit-innovator/:idPeserta', innovatorController.getEditInnovator);
router.post('/edit-innovator', innovatorController.postEditInnovator);
router.post('/delete-innovator', innovatorController.postDeleteInnovator);
router.get('/detail-innovator/:idPeserta', innovatorController.getDetailInnovator);

//View Amoeba
router.get('/view-amoeba', amoebaController.getAmoebas);
router.get('/edit-amoeba/:idAmoeba', amoebaController.getEditAmoeba);
router.post('/edit-amoeba', amoebaController.postEditAmoeba);
router.post('/delete-amoeba', amoebaController.postDeleteAmoeba);
router.get('/detail-amoeba/:idAmoeba', amoebaController.getDetailAmoeba);

router.get('/api/amoebas', amoebaController.getAmoebasApi);
router.post('/view-amoeba/upload', amoebaController.postUploadAmoeba);

// View Team Data
router.get('/view-team-data', teamDataController.getTeamDatas);
router.post('/view-team-data/upload', teamDataController.postUploadTeamData);

module.exports = router;