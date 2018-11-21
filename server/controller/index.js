const express = require('express');
const login = require('./login');
const questions = require('./questions');
const specialization = require('./speclalization');
const skills = require('./skills');
const jobs = require('./jobs');
const signup = require('./signup');

const router = express.Router();

router.post('/login', login.post);
router.get('/specialization/:section', questions.get);
router.get('/specialization', specialization.get);
router.get('/get-skills', skills.get);
router.get('/get-jobs', jobs.get);
router.post('/signup', signup.post);


module.exports = router;
