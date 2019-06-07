const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/index', adminController.getIndex);
router.get('/inner', adminController.getInner);
router.get('/usercontrol', adminController.getUsercontrol);

module.exports = router;

// router.post('/create-password', authControlller.postReset);