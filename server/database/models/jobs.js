const Sequelize = require('sequelize');
const connection = require('../config');

const jobs = connection.define('jobs', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = jobs;
