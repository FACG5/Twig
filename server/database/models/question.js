const Sequelize = require('sequelize');
const connection = require('../config');

const questions = connection.define('question', {
  questions: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = questions;
