const sequelize = require('../config');

// getTranslations contain two query :
// first query (questionsData) returns all questions and  username
// second query (translationsData) returns all translations by questions.id

const getTranslations = async (questionId, userId) => {
  const questionsData = await sequelize.query(
    'select questions.* ,users.first_name As username from questions join users on questions.owner = users.id  where questions.id = :questionId GROUP BY questions.id ,users.id',
    { replacements: { questionId } },
  );
  const translationsData = await sequelize.query(
    'select sum(COALESCE(votes.vote_up, 0)) as "voteUp", sum(COALESCE(votes.vote_down, 0)) as "voteDown",translations.*,users.first_name As username ,users.avatar_url from translations left join votes ON votes.translations_id = translations.id join questions on translations.question_id = questions.id join users on translations.owner = users.id where (select users.dialect_id from users where users.id =:userId)= translations.dialect_id and questions.id =:questionId GROUP BY questions.id ,users.id,translations.id order by translations.date desc',
    { replacements: { questionId, userId } },
  );
  const result = { questionsData, translationsData };
  return result;
};
module.exports = getTranslations;
