const getTranslations = require('../database/query/translations');

exports.get = async (request, response) => {
  try {
    const { questionId } = request.params;
    const userId = request.id;
    const result = await getTranslations(questionId, userId);
    const { translationsData, questionsData } = result;
    const resulttranslation = translationsData[0];
    const resultquestions = questionsData[0];
    if (!resulttranslation.length && !resultquestions.length) {
      response.send('There\'s No Data!');
    } else {
      response.send({ resultquestions, resulttranslation });
    }
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
