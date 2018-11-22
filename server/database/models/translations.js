const Sequelize = require('sequelize');
const connection = require('../config');

const translations = connection.define('translations', {
  translation: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
  },
});

module.exports = translations;
