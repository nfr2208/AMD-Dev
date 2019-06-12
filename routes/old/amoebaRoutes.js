const express = require('express');

const amoebaController = require('../../controllers/old/amoebaController');

const router = express.Router();

router.get('/register-amoeba', amoebaController.getRegisterAmoeba);
router.post('/register-amoeba', amoebaController.postRegisterAmoeba);
router.get('/view-amoeba', amoebaController.getAmoebas);
router.get('/edit-amoeba/:idAmoeba', amoebaController.getEditAmoeba);
router.post('/edit-amoeba', amoebaController.postEditAmoeba);
router.post('/delete-amoeba', amoebaController.postDeleteAmoeba);
router.get('/detail-amoeba/:idAmoeba', amoebaController.getDetailAmoeba);

router.get('/api/amoebas', amoebaController.getAmoebasApi);
router.post('/view-amoeba/upload', amoebaController.postUploadAmoeba);

module.exports = router;