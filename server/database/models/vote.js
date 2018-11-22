const Sequelize = require('sequelize');
const connection = require('../config');

const votes = connection.define('vote', {
  vote_up: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  vote_down: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  translations_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
});

module.exports = votes;
