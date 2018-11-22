const express = require('express');
const login = require('./login');
const questions = require('./questions');
const specialization = require('./speclalization');
const skills = require('./skills');
const jobs = require('./jobs');
const signup = require('./signup');
const translation = require('./translations');
const checkToken = require('./authentication');
<<<<<<< HEAD
const userDetails = require('./user');
=======
const languages = require('./languages');
const dialects = require('./dialects');
>>>>>>> e2e4b0f41c6db4db7340b931f97c9cf9c5bd3e10

const router = express.Router();

router.post('/login', login.post);
router.post('/signup', signup.post);
router.get('/get-languages', languages.get);
router.get('/get-skills', skills.get);
router.get('/get-dialcets/:languageId', dialects.get);
router.get('/get-jobs', jobs.get);

router.use(checkToken);
router.get('/questions/:questionId', translation.get);
router.get('/specialization/:section', questions.get);
router.get('/specialization', specialization.get);
<<<<<<< HEAD
router.get('/questions/:questionId', translation.get);
router.get('/details', userDetails.get);
=======

>>>>>>> e2e4b0f41c6db4db7340b931f97c9cf9c5bd3e10

module.exports = router;
