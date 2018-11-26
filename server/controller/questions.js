const getQuestions = require('../database/query/questions');
const { questions } = require('../database/models');

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

exports.post = async (request, response) => {
  try {
    const owner = request.id;
    const { speclalizationsId, question, section } = request.body;
    const data = { owner, question, speclalization_id: speclalizationsId };
    await questions.create(data);
    const results = await getQuestions(section);
    response.status(200).send(results[0]);
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
