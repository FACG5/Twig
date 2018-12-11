const snakeCase = require('snakecase-keys');
const { dialect } = require('../database/models');

exports.get = async (request, response) => {
  const { languageId } = request.params;

  try {
    const dialectsResult = await dialect.findAll({
      raw: true,
      where: { language_id: languageId },
      order: [
        ['name', 'ASC'],
      ],
    });
    response.status(200).send(dialectsResult);
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};


exports.post = async (request, response) => {
  try {
    const { name, language_id: languageId } = request.body;
    let data = { name, languageId };
    data = snakeCase(data);
    await dialect.create(data);
    response.status(200).send('Successful !');
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
