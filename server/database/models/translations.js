const Sequelize = require('sequelize');
const connection = require('../config');

const translations = connection.define('translations', {
  translation: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  vote_up: {
    type: Sequelize.INTEGER,
  },
  vote_down: {
    type: Sequelize.INTEGER,
  },
  date: {
    type: Sequelize.DATE,
  },
});

module.exports = translations;
