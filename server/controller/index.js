const express = require('express');
const login = require('./login');
const getQuestions = require('./getQuestions');
const specialization = require('./speclalization');

const router = express.Router();

router.post('/login', login.post);
router.get('/specialization/:section', getQuestions.get);
router.get('/specialization', specialization.get);

module.exports = router;
