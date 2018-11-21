const Sequelize = require('sequelize');
const connection = require('../config');

const skills = connection.define('skills', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = skills;
