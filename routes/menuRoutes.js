const express = require('express');

const menuController = require('../controllers/menuController');

const router = express.Router();

router.get('/', menuController.getDashboard);
router.get('/index', menuController.getDashboard);
router.get('/inner', menuController.getInner);

module.exports = router;