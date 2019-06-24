const express = require('express');

const adminController = require('../controllers/adminController');
const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');

const router = express.Router();

router.get('/index', adminController.getIndex);
router.get('/inner', adminController.getInner);
router.get('/usercontrol', adminController.getUserControl);
router.post('/create-user', adminController.postCreateUser);
router.get('/create-password/:token', adminController.getCreatePassword);
router.post('/create-password', adminController.postCreatePassword);

module.exports = router;

// router.post('/create-password', authControlller.postReset);