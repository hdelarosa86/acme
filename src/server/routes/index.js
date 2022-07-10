const router = require('express').Router();

//mounting routes on their own router to oganize code and help with debugging
router.use('/companies', require('./companies.router'));
router.use('/employees', require('./employees.router'));

module.exports = router;
