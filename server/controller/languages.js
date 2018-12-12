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
    const data = { name };
    await languages.create(data);
    const languagesResult = await languages.findAll({
      raw: true,
      order: [
        ['name', 'ASC'],
      ],
    });
    response.status(200).send({ message: 'Successful !', languagesResult });
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
