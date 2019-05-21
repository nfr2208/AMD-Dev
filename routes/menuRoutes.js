const express = require('express');

const menuController = require('../controllers/menuController');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/', isAuth, menuController.getDashboard);
router.get('/index', isAuth, menuController.getDashboard);
router.get('/inner', isAuth, menuController.getInner);

module.exports = router;