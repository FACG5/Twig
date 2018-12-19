const getQuestions = require('../database/query/questions');
const { questions, users, translations } = require('../database/models');

exports.get = async (request, response) => {
  const userId = request.id;
  const dialectResult = await users.findOne({
    raw: true,
    where: { id: userId },
    attributes: ['dialect_id'],
  });
  const { dialect_id: dialectId } = dialectResult;
  try {
    const { section } = request.params;
    const result = await getQuestions(section);
    if (result.speclalizationsData[0][0]) {
      if (result.questionsData[0][0]) {
        const getTranslationCount = result.questionsData[0].map(async (element) => {
          const questionId = element.id;
          const countTranslation = await translations.count({
            raw: true,
            where: { question_id: questionId, dialect_id: dialectId },
          });
          element.countTranslation = countTranslation;
          return element;
        });

        const speclalizationsDataResult = await result.speclalizationsData[0];
        const finalResult = await Promise.all(getTranslationCount);
        response.status(200).send({ finalResult, speclalizationsDataResult });
      } else {
        const speclalizationsDataResult = await result.speclalizationsData[0];
        const finalResult = await result.questionsData[0];
        response.status(200).send({ finalResult, speclalizationsDataResult });
      }
    } else {
      response.status(404).send('Oops! , invalid Specizlization name !');
    }
  } catch (error) {
    response.status(500).send('Server Error');
  }
};

exports.post = async (request, response) => {
  const userId = request.id;
  const dialectResult = await users.findOne({
    raw: true,
    where: { id: userId },
    attributes: ['dialect_id'],
  });
  const { dialect_id: dialectId } = dialectResult;
  try {
    const owner = request.id;
    const { speclalizationsId, question, section } = request.body;
    const data = { owner, question, speclalization_id: speclalizationsId };
    await questions.create(data);
    const result = await getQuestions(section);
    const getTranslationCount = result.questionsData[0].map(async (element) => {
      const questionId = element.id;
      const countTranslation = await translations.count({
        raw: true,
        where: { question_id: questionId, dialect_id: dialectId },
      });
      element.countTranslation = countTranslation;
      return element;
    });
    const speclalizationsDataResult = await result.speclalizationsData[0];
    const finalResult = await Promise.all(getTranslationCount);
    response.status(200).send({ finalResult, speclalizationsDataResult });
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
