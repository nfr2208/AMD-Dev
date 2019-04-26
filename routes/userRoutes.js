const express = require('express');

const menuController = require('../controllers/menuController');
const amoebaController = require('../controllers/amoebaController');
const innovatorController = require('../controllers/innovatorController');

const router = express.Router();

router.get('/', menuController.getDashboard);
router.get('/inner', menuController.getInner);

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

module.exports = router;