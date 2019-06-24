const express = require('express');

const menuController = require('../controllers/menuController');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', menuController.getDashboard);
router.get('/index', menuController.getDashboard);
router.get('/inner', menuController.getInner);

module.exports = router;