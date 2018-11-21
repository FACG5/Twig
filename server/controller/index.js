const express = require('express');
const login = require('./login');
const questions = require('./questions');
const specialization = require('./speclalization');
const translation = require('./translations');
const checkToken = require('./authentication');

const router = express.Router();

router.post('/login', login.post);

router.use(checkToken);
router.get('/specialization/:section', questions.get);
router.get('/specialization', specialization.get);
router.get('/questions/:questionId', translation.get);

module.exports = router;
