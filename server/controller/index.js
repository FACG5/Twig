const express = require('express');
const login = require('./login');
const questions = require('./questions');
const specialization = require('./speclalization');

const router = express.Router();

router.post('/login', login.post);
router.get('/specialization/:section', questions.get);
router.get('/specialization', specialization.get);

module.exports = router;
