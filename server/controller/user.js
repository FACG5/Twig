const { getUserDetails, getProfileDetails } = require('../database/query/users');

exports.get = async (request, response) => {
  try {
    const userId = request.id;
    const result = await getUserDetails(userId);
    response.send(result[0][0]);
  } catch (error) {
    response.status(500).send('Server Error');
  }
};

exports.getProfile = async (request, response) => {
  try {
    const userId = request.id;
    const result = await getProfileDetails(userId);
    response.send(result[0][0]);
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
