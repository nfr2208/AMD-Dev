const express = require('express');

const amoebaController = require('../controllers/amoebaController');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/api/amoebas', amoebaController.getAmoebaAPI);
router.get('/list-amoeba', amoebaController.getAmoebas);
router.get('/profile-amoeba/:Id', amoebaController.getAmoebaProfile);
router.post('/edit-amoeba', amoebaController.postEditAmoeba);
router.get('/add-amoeba', amoebaController.getAddAmoeba);
router.post('/add-amoeba', amoebaController.postAddAmoeba);

module.exports = router;