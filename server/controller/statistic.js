const sequelize = require('../database/config');
const { questions, users, translations } = require('../database/models');

exports.get = async (request, response) => {
  try {
    const getUsersCount = await users.findAll({
      attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'usersCount']],
    });
    const getQuestionsCount = await questions.findAll({
      attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'questionsCount']],
    });
    const getTranslationsCount = await translations.findAll({
      attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'translationsCount']],
    });

    const usersCount = getUsersCount[0].dataValues;
    const questionsCount = getQuestionsCount[0].dataValues;
    const translationsCount = getTranslationsCount[0].dataValues;

    Promise.all([usersCount, questionsCount, translationsCount]).then((res) => {
      if (!res.length) {
        response.status(404).send('Oops! No data! ');
      } else {
        response.status(200).send(res);
      }
    });
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
