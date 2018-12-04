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
