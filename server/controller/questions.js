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
    if (result[0][0]) {
      const getTranslationCount = result[0].map(async (element) => {
        const questionId = element.id;
        const countTranslation = await translations.count({
          raw: true,
          where: { question_id: questionId, dialect_id: dialectId },
        });
        element.countTranslation = countTranslation;
        return element;
      });
      const finalResult = await Promise.all(getTranslationCount);
      response.status(200).send(finalResult);
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
    const results = await getQuestions(section);
    const getTranslationCount = results[0].map(async (element) => {
      const questionId = element.id;
      const countTranslation = await translations.count({
        raw: true,
        where: { question_id: questionId, dialect_id: dialectId },
      });
      element.countTranslation = countTranslation;
      return element;
    });
    const finalResult = await Promise.all(getTranslationCount);
    response.status(200).send(finalResult);
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
