const getQuestions = require('../database/query/questions');

exports.get = async (request, response) => {
  try {
    const { section } = request.params;
    const result = await getQuestions(section);
    if (result[0][0]) {
      response.status(200).send(result[0]);
    } else {
      response.status(404).send('Oops! , invalid Specizlization name !');
    }
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
