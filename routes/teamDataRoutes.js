const express = require('express');

const teamDataController = require('../controllers/teamDataController');
const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');
const isAI = require('../middleware/is-ai');
const isAB = require('../middleware/is-ab');

const router = express.Router();

router.get('/dashboard/view-team-data', isAuth, teamDataController.getTeamDatas);
router.post('/dashboard/view-team-data/upload', isAuth, isAI, teamDataController.postUploadTeamData);
router.get('/dashboard/add-data-talent', isAuth, isAI, teamDataController.getAddDataTalent);
router.post('/dashboard/add-data-talent', isAuth, isAI, teamDataController.postAddDataTalent);
router.get('/dashboard/edit-data-talent/:id', isAuth, isAI, teamDataController.getEditDataTalent);
router.post('/dashboard/edit-data-talent', isAuth, isAI, teamDataController.postEditDataTalent);
router.post('/dashboard/delete-data-talent', isAuth, isAI, teamDataController.postDeleteDataTalent);

module.exports = router;