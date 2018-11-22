const { skills } = require('../database/models');

exports.get = async (request, response) => {
  try {
    const result = await skills.findAll({ raw: true });
    if (result) {
      response.status(200).send(result);
    } else {
      response.status(404).send('No Skills found');
    }
  } catch (error) {
    response.status(500).send('Server Error !');
  }
};
