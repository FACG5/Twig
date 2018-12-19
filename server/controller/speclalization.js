const getSpeclalizations = require('../database/query/speclalizations');
const { speclalizations } = require('../database/models');

exports.get = async (request, response) => {
  try {
    const result = await getSpeclalizations();
    if (result[0] === []) {
      response.status(204).send('There are no specialty in database !');
    } else {
      response.status(200).send(result[0]);
    }
  } catch (error) {
    response.status(500).send('Server Error');
  }
};


exports.post = async (request, response) => {
  try {
    const { category: name, avatarUrl } = request.body;
    const data = { name, avatar_url: avatarUrl };   
    await speclalizations.create(data);
    response.status(200).send({ message: 'Successful !' });
  } catch (error) {
    response.status(500).send('Internal Server Error !');
  }
};
