const express = require('express');
const login = require('./login');
const getQuestions = require('./getQuestions');

const router = express.Router();

router.post('/login', login.post);
router.get('/specialization/:section', getQuestions.get);

module.exports = router;
