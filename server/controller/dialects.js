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
    const { dialects, languageId } = request.body;
    const data = { name: dialects, language_id: languageId };
    await dialect.create(data);
    response.status(200).send('Successful !');
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
