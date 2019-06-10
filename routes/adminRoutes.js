const express = require('express');

const adminController = require('../controllers/adminController');
const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');
const isAI = require('../middleware/is-ai');
const isAB = require('../middleware/is-ab');

const router = express.Router();

router.get('/index', isAuth, isAdmin, adminController.getIndex);
router.get('/inner', isAuth, isAdmin, adminController.getInner);
router.get('/usercontrol', isAuth, isAdmin, adminController.getUserControl);
router.post('/create-user', isAuth, isAdmin, adminController.postCreateUser);
router.get('/create-password/:token', adminController.getCreatePassword);
router.post('/create-password', adminController.postCreatePassword);

module.exports = router;

// router.post('/create-password', authControlller.postReset);