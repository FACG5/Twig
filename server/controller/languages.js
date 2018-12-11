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

exports.post = async (request, response) => {
  try {
    const { name } = request.body;
    await languages.create(name);
    response.status(200).send('Successful !');
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
