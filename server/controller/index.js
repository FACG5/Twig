const express = require('express');
const login = require('./login');
const questions = require('./questions');
const specialization = require('./speclalization');
const translation = require('./translations');
const checkToken = require('./authentication');
const languages = require('./languages');
const dialects = require('./dialects');

const router = express.Router();

router.post('/login', login.post);
router.get('/questions/:questionId', translation.get);
router.get('/get-languages', languages.get);
router.get('/get-dialcets/:languageId', dialects.get);

router.use(checkToken);
router.get('/specialization/:section', questions.get);
router.get('/specialization', specialization.get);


module.exports = router;
