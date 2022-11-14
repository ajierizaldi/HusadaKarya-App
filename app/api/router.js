const express = require('express');
const router = express.Router();
const medicineControllers = require('./controllers/medicineControllers');
const patientControllers = require('./controllers/patientControllers');
const userControllers = require('./controllers/userControllers');

// medicine API
router.get('/meds', medicineControllers.list);
router.post('/addMed', medicineControllers.create);
router.put('/updateMed/:id', medicineControllers.update);
router.delete('/deleteMed/:id', medicineControllers.destroy);

// Patient API
router.get('/patients', patientControllers.list);
router.post('/addPatient', patientControllers.create);
router.put('/updatePatient/:id', patientControllers.update);
router.delete('/deletePatient/:id', patientControllers.destroy);

// User API
router.post('/register', userControllers.register);
router.post('/login', userControllers.login);
router.get('/profile', userControllers.getProfile);


module.exports = router;