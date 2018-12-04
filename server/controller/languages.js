const { languages } = require('../database/models');

exports.get = async (request, response) => {
  try {
    const newLocal = await languages.findAll({
      raw: true,
      order: [
        ['name', 'ASC'],
      ],
    });
    const languagesResult = newLocal;
    response.status(200).send(languagesResult);
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
