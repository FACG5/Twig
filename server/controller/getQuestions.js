const getQuestions = require('../database/query/getQuestions');

exports.get = async (request, response) => {
  try {
    const { section } = request.params;
    const result = await getQuestions(section);
    if (result[0][0]) {
      response.send(result[0]);
    } else {
      response.status(404).send('Not found Data');
    }
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
