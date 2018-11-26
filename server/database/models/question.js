const Sequelize = require('sequelize');
const connection = require('../config');

const questions = connection.define('question', {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('NOW'),
  },
});

module.exports = questions;
