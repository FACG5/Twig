const snakeCase = require('snakecase-keys');
const getTranslations = require('../database/query/translations');
const { users, translations } = require('../database/models');

exports.get = async (request, response) => {
  try {
    const { questionId } = request.params;
    if (parseInt(questionId, 10)) {
      const userId = request.id;
      const result = await getTranslations(questionId, userId);
      const { translationsData, questionsData } = result;
      const resulttranslation = translationsData[0];
      const resultquestions = questionsData[0];
      if (!resultquestions.length) {
        response.status(404).send('Oops! Question not found ! ');
      } else {
        response.send({ resultquestions, resulttranslation });
      }
    } else {
      response.status(404).send('Oops! Question not found ! ');
    }
  } catch (error) {
    response.status(500).send('Server Error');
  }
};

exports.post = async (request, response) => {
  try {
    const owner = request.id;
    const user = await users.findAll({ raw: true, where: { id: owner } });
    const { dialect_id: dialectId, language_id: languageId } = user[0];
    const {
      typeId, translation, questionId, fileName,
    } = request.body;
    let data = {
      translation, typeId, languageId, dialectId, owner, questionId, link: fileName,
    };
    data = snakeCase(data);
    await translations.create(data, { raw: true });
    const results = await getTranslations(questionId, owner);
    const { translationsData } = results;
    const translationsResults = translationsData[0];
    response.status(200).send(translationsResults);
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
