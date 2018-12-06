const getQuestions = require('../database/query/questions');
const { questions } = require('../database/models');

exports.get = async (request, response) => {
  const userId = request.id;
  try {
    const { section } = request.params;
    const result = await getQuestions(section, userId);
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

exports.put = async (request, response) => {
  try {
    const { id: loggedUserId } = request;
    const data = request.body;
    const { userId, question, questionId: id } = data;
    if (loggedUserId === userId) {
      const updateResult = await questions.update(
        { question },
        { where: { id } },
      );
      if (updateResult.length) {
        response
          .status(200)
          .send('Your question has been successfully modified');
      } else {
        throw new Error();
      }
    } else {
      response.status(401).send('unAutorized');
    }
  } catch (error) {
    response.status(500).send('Internal Server Error');
  }
};
