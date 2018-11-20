const getSpeclalizations = require('../database/query/speclalizations');

exports.get = async (request, response) => {
  try {
    const result = await getSpeclalizations();
    if (result === []) {
      response.send('There\'s no specialty in database !');
    } else {
      response.send(result);
    }
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
