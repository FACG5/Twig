const Sequelize = require('sequelize');
const connection = require('../config');

const speclalizations = connection.define('speclalizations', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar_url: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = speclalizations;
