const sequelize = require('../config');

const getUserDetails = async (userID) => {
  const userDetails = await sequelize.query(
    'select users.first_name AS firstName, users.last_name AS lastName, users.id AS userId, users.location AS location, users.avatar_url AS avatarUrl,dialects.name AS dialectName, languages.name AS languageName from users join dialects on dialects.id = users.dialect_id join languages on languages.id = users.language_id  where users.id = :userId', { replacements: { userID } },
  );
  return userDetails;
};
module.exports = getUserDetails;
