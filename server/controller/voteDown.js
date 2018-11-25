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
    const CheckVote = await votes.findAll({ raw: true, where: { translations_id: translationsId, user_id: userId, vote_up: 1 } });
    const CheckVoteDown = await votes.findAll({ raw: true, where: { translations_id: translationsId, user_id: userId, vote_down: 1 } });

    if (!CheckVote.length) {
      if (!CheckVoteDown.length) {
        voteData = snakeCase(voteData);
        await votes.create(voteData);
        const result = await getTranslations(questionId, userId);
        const { translationsData } = result;
        const translationResult = translationsData[0];
        if (!translationResult.length) {
          response.send('There\'s No Data!');
        } else {
          response.status(200).send({ message: 'vote down', translationResult });
        }
      } else {
        const { translations_id: translationsIds, user_id: userIds } = CheckVoteDown[0];
        await votes.destroy({ raw: true, where: { translations_id: translationsIds, user_id: userIds } });
        const result = await getTranslations(questionId, userId);
        const { translationsData } = result;
        const translationResult = translationsData[0];
        if (!translationResult.length) {
          response.send('There\'s No Data!');
        } else {
          response.status(200).send({ message: 'vote Up', translationResult });
        }
      }
    } else {
      const { translations_id: translationsIds, user_id: userIds } = CheckVote[0];
      await votes.destroy({ raw: true, where: { translations_id: translationsIds, user_id: userIds } });
      voteData = snakeCase(voteData);
      await votes.create(voteData);
      const result = await getTranslations(questionId, userId);
      const { translationsData } = result;
      const translationResult = translationsData[0];
      if (!translationResult.length) {
        response.send('There\'s No Data!');
      } else {
        response.status(200).send({ message: 'vote down', translationResult });
      }
    }
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
