const sequelize = require('../config');

const getUserDetails = async (userId) => {
  const userDetails = await sequelize.query(
    'SELECT users.first_name AS "firstName", users.last_name AS "lastName", users.id AS "userId", users.location AS location, users.avatar_url AS "avatarUrl" ,dialects.name AS "dialectName", languages.name AS "languageName" FROM users JOIN dialects ON dialects.id = users.dialect_id JOIN languages ON languages.id = users.language_id WHERE users.id = :userId', { replacements: { userId } },
  );
  return userDetails;
};

const getProfileDetails = async (userId) => {
  const profileDetails = await sequelize.query(
    'SELECT users.first_name AS "firstName", users.last_name AS "lastName", users.id AS "userId", users.location AS location, users.avatar_url AS "avatarUrl" , users.gender AS gender, users.age As age, users.email AS email, users.other_skills AS "otherSkills", users.job_description AS "jobDescription", users.bio AS bio, users.date_of_registe AS "registerDate", dialects.name AS "dialectName", languages.name AS "languageName", jobs.title AS "jobTitle" FROM users JOIN dialects ON dialects.id = users.dialect_id JOIN languages ON languages.id = users.language_id JOIN jobs ON jobs.id = users.job_id WHERE users.id = :userId', { replacements: { userId } },
  );
  return profileDetails;
};

const getLanguageLevel = async (userId) => {
  const LanguageLevel = await sequelize.query(
    'SELECT skills.description AS "skillsDescription", skills.id AS "skillsId" FROM users JOIN employee_skills ON employee_skills.user_id = users.id JOIN skills ON skills.id = employee_skills.skill_id WHERE users.id = :userId', { replacements: { userId } },
  );
  return LanguageLevel;
};

module.exports = { getUserDetails, getProfileDetails, getLanguageLevel };
