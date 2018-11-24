const Sequelize = require('sequelize');
const connection = require('../config');

const users = connection.define('user', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  other_skills: {
    type: Sequelize.TEXT,
  },
  job_description: {
    type: Sequelize.TEXT,
  },
  bio: {
    type: Sequelize.TEXT,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date_of_registe: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  avatar_url: {
    type: Sequelize.TEXT,
    defaultValue: 'https://files.gitter.im/lubnaabd/vKAC/img_avatar.png',
  },
  linked_in: {
    type: Sequelize.TEXT,
  },
  facebook: {
    type: Sequelize.TEXT,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

module.exports = users;
