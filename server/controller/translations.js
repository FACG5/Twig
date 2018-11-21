const getTranslations = require('../database/query/translations');

exports.get = async (request, response) => {
  try {
    const { questionId } = request.params;
    const userId = request.id;
    const result = await getTranslations(questionId, userId);
    if (result[0] === []) {
      response.send('There\'s No Data!');
    } else {
      response.send(result[0]);
    }
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
