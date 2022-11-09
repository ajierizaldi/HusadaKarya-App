const express = require('express');
const router = express.Router();
const medicineControllers = require('./controllers/medicineControllers');
// const patientControllers = require('./controllers/patientControllers');

router.get('/meds', medicineControllers.list);
router.post('/addMed', medicineControllers.create);
router.put('/update/:id', medicineControllers.update);
router.delete('/delete/:id', medicineControllers.destroy);

module.exports = router;