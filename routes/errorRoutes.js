const express = require('express');

const errorController = require('../controllers/errorController');

const router = express.Router();

router.post('/404', errorController.get404);

module.exports = router;