const express = require('express');

const authControlller = require('../controllers/authController')

const router = express.Router();

router.get('/login', authControlller.getLogin);
router.post('/postlogin', authControlller.postLogin);
router.post('/logout', authControlller.postLogout);
router.post('/signup', authControlller.postSignUp);
router.post('/reset', authControlller.postReset);
router.get('/reset/:token', authControlller.getNewPassword);
router.post('/new-password', authControlller.postNewPassword);

module.exports = router;