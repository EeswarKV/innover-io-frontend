const express = require('express');
const authController = require('../controllers/authController');
const jobController = require('../controllers/jobController');

const router = express.Router();

// auth
router.post('/api/user/login', authController.login);
router.get('/api/user/logout', authController.logout);

// jobs
router.get('/api/jobs/latest-jobs', jobController.latestJobs);

module.exports = router;
