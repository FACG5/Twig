const express = require('express');
const login = require('./login');
const questions = require('./questions');
const specialization = require('./speclalization');
const skills = require('./skills');
const jobs = require('./jobs');
const signup = require('./signup');
const translation = require('./translations');
const checkToken = require('./authentication');
const userDetails = require('./user');
const languages = require('./languages');
const dialects = require('./dialects');

const router = express.Router();

router.post('/login', login.post);
router.post('/signup', signup.post);
router.get('/get-languages', languages.get);
router.get('/get-skills', skills.get);
router.get('/get-dialcets/:languageId', dialects.get);
router.get('/get-jobs', jobs.get);
const voteUp = require('./voteUp');

router.use(checkToken);
router.get('/questions/:questionId', translation.get);
router.get('/specialization/:section', questions.get);
router.get('/specialization', specialization.get);
router.get('/questions/:questionId', translation.get);
router.get('/details', userDetails.get);
router.post('/questions/:questionId/voteUp', voteUp.post);

module.exports = router;
