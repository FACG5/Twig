const Sequelize = require('sequelize');
const connection = require('../config');

const languages = connection.define('language', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = languages;
