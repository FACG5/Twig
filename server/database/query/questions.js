const sequelize = require('../config/index');

const getQuestions = async (name) => {
  const questionsData = await sequelize.query(
    'select count(translations.question_id) As translations,questions.* ,speclalizations.*,users.first_name As username from questions left join translations on questions.id = translations.question_id join speclalizations on questions.speclalization_id = speclalizations.id join users on questions.owner = users.id  where speclalizations.name = :name GROUP BY questions.id ,users.id,speclalizations.id', { replacements: { name } },
  );

  return questionsData;
};
module.exports = getQuestions;
