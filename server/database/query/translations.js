const sequelize = require('../config/index');

const getTranslations = async (questionId, userId) => {
  const translationsData = await sequelize.query(
    'select translations.id As translation_id,translations.vote_down As vote_down,translations.vote_up As vote_up,questions.questions,questions.id,users.first_name As username ,users.avatar_url,users.language_id,users.dialect_id,translations.translation from questions left join translations on questions.id =translations.question_id  join users on questions.owner = users.id where (select users.dialect_id from users where users.id =:userId)= translations.dialect_id and questions.id =:questionId GROUP BY questions.id ,users.id,translations.id',
    { replacements: { questionId, userId } },
  );

  return translationsData;
};
module.exports = getTranslations;
