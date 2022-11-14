const express = require('express');
const router = express.Router();
const controllers = require('./controllers/controllers');

router.get('/', controllers.index);
router.get('/profile', controllers.profile);
router.get('/statistic', controllers.statistic);
router.get('/patient', controllers.patient);
router.get('/medicine', controllers.medicine);
router.get('/addMedicine', controllers.addMedicine);
router.post('/deleteMed', controllers.deleteMed);

module.exports = router;