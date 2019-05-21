const express = require('express');

const teamDataController = require('../controllers/teamDataController');
const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');

const router = express.Router();

router.get('/view-team-data', isAuth, isAdmin, teamDataController.getTeamDatas);
router.post('/view-team-data/upload', isAuth, teamDataController.postUploadTeamData);
router.get('/add-data-talent', isAuth, isAdmin, teamDataController.getAddDataTalent);

module.exports = router;