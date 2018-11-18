const Sequelize = require('sequelize');
const connection = require('../config');

const typesOfTranslations = connection.define('typesOfTranslations', {
  type: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = typesOfTranslations;
