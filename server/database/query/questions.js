const sequelize = require('../config/index');

const getQuestions = async (name, userId) => {
  const dialect = await sequelize.query('select users.dialect_id from users where users.id =:userId', { replacements: { userId } });
  const { dialect_id } = dialect[0][0];

  const questionsData = await sequelize.query(
    'select count(translations.dialect_id ) As translations,(COALESCE(translations.dialect_id, 0)) AS dialect ,questions.*,speclalizations.name ,speclalizations.id As "speclalizationsId",speclalizations.avatar_url,users.first_name As username from questions left join translations on questions.id = translations.question_id join speclalizations on questions.speclalization_id = speclalizations.id join users on questions.owner = users.id  where  speclalizations.name = :name and translations.dialect_id IS NULL OR translations.dialect_id =:dialect_id GROUP BY questions.id ,users.id,speclalizations.id,translations.dialect_id ORDER BY questions.date DESC ', { replacements: { name, dialect_id } },
  );

  return questionsData;
};
module.exports = getQuestions;
