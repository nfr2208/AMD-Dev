const express = require('express');

const teamDataController = require('../../controllers/old/teamDataController');
const isAuth = require('../../middleware/is-auth');
const isAdmin = require('../../middleware/is-admin');
const isAI = require('../../middleware/is-ai');
const isAB = require('../../middleware/is-ab');

const router = express.Router();

router.get('/profile', isAuth, teamDataController.getProfile);

router.get('/data-talent/view-team-data', isAuth, teamDataController.getTeamDatas);
router.post('/data-talent/view-team-data/upload', isAuth, isAI, teamDataController.postUploadTeamData);
router.get('/data-talent/add-data-talent', isAuth, isAI, teamDataController.getAddDataTalent);
router.post('/data-talent/add-data-talent', isAuth, isAI, teamDataController.postAddDataTalent);
router.get('/data-talent/edit-data-talent/:id', isAuth, isAI, teamDataController.getEditDataTalent);
router.post('/data-talent/edit-data-talent', isAuth, isAI, teamDataController.postEditDataTalent);
router.post('/data-talent/delete-data-talent', isAuth, isAI, teamDataController.postDeleteDataTalent);

module.exports = router;