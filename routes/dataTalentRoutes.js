const express = require('express');

const teamDataController = require('../controllers/teamDataController');

const router = express.Router();

router.get('/view-team-data', teamDataController.getTeamDatas);
router.post('/view-team-data/upload', teamDataController.postUploadTeamData);

module.exports = router;