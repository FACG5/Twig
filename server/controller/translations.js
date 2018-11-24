const getTranslations = require('../database/query/translations');

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
