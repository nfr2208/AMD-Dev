const express = require('express');

const innovatorController = require('../controllers/old/innovatorController');

const router = express.Router();

router.get('/register-innovator', innovatorController.getRegisterInnovator);
router.post('/register-innovator', innovatorController.postRegisterInnovator);
router.get('/view-innovator', innovatorController.getInnovators);
router.get('/edit-innovator/:idPeserta', innovatorController.getEditInnovator);
router.post('/edit-innovator', innovatorController.postEditInnovator);
router.post('/delete-innovator', innovatorController.postDeleteInnovator);
router.get('/detail-innovator/:idPeserta', innovatorController.getDetailInnovator);

module.exports = router;