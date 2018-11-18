const Sequelize = require('sequelize');
const connection = require('../config');

const dialect = connection.define('dialect', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = dialect;
