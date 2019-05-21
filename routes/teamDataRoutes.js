const express = require('express');

const teamDataController = require('../controllers/teamDataController');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/view-team-data', isAuth, teamDataController.getTeamDatas);
router.post('/view-team-data/upload', isAuth, teamDataController.postUploadTeamData);

module.exports = router;