const express = require('express');

const teamDataController = require('../controllers/teamDataController');
const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');

const router = express.Router();

router.get('/view-team-data', isAuth, isAdmin, teamDataController.getTeamDatas);
router.post('/view-team-data/upload', isAuth, teamDataController.postUploadTeamData);
router.get('/add-data-talent', isAuth, isAdmin, teamDataController.getAddDataTalent);
router.post('/add-data-talent', isAuth, isAdmin, teamDataController.postAddDataTalent);
router.get('/edit-data-talent/:id', isAuth, isAdmin, teamDataController.getEditDataTalent);
router.post('/edit-data-talent', isAuth, isAdmin, teamDataController.postEditDataTalent);
router.post('/delete-data-talent', isAuth, isAdmin, teamDataController.postDeleteDataTalent);

module.exports = router;