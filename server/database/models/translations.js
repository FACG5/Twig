const Sequelize = require('sequelize');
const connection = require('../config');

const translations = connection.define('translations', {
  translation: {
    type: Sequelize.TEXT,
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('NOW'),
  },
  link: {
    type: Sequelize.TEXT,
  },
});

module.exports = translations;
