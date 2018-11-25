const getSpeclalizations = require('../database/query/speclalizations');

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
