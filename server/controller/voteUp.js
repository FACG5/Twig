const snakeCase = require('snakecase-keys');
const { votes } = require('../database/models');
const getTranslations = require('../database/query/translations');

exports.post = async (request, response) => {
  try {
    const userId = request.id;
    const { questionId } = request.params;
    const { voteUp, voteDown, translationsId } = request.body;
    let voteData = {
      voteUp, voteDown, translationsId, userId,
    };
    voteData = snakeCase(voteData);
    await votes.create(voteData);
    const result = await getTranslations(questionId, userId);
    const { translationsData } = result;
    const resulttranslation = translationsData[0];
    if (!resulttranslation.length) {
      response.send('There\'s No Data!');
    } else {
      response.status(200).send({ message: 'vote Up', resulttranslation });
    }
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
