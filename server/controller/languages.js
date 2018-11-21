const { languages } = require('../database/models');

exports.get = async (request, response) => {
  try {
    const languagesResult = await languages.findAll({ raw: true });
    response.status(200).send(languagesResult);
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
