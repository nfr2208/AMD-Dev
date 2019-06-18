const express = require('express');

const talentController = require('../controllers/talentController');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/talents', talentController.getTalentsAPI);
router.get('/list-talent', talentController.getTalents);
router.get('/add-talent', talentController.getAddTalent);
router.post('/add-talent', talentController.postAddTalent);
router.post('/edit-talent', talentController.postEditTalent);
router.get('/profile-talent/:Id', talentController.getTalentProfile);

module.exports = router;