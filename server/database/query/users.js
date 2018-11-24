const sequelize = require('../config');

const getUserDetails = async (userId) => {
  const userDetails = await sequelize.query(
    'SELECT users.first_name AS "firstName", users.last_name AS "lastName", users.id AS "userId", users.location AS location, users.avatar_url AS "avatarUrl" ,dialects.name AS "dialectName", languages.name AS "languageName" FROM users JOIN dialects ON dialects.id = users.dialect_id JOIN languages ON languages.id = users.language_id WHERE users.id = :userId', { replacements: { userId } },
  );
  return userDetails;
};
module.exports = getUserDetails;
