const { users } = require('../database/models');
const { getUserDetails, getProfileDetails, getLanguageLevel } = require('../database/query/users');

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
    const profileResponse = await getProfileDetails(userId);
    const languageResponse = await getLanguageLevel(userId);
    const profileResult = profileResponse[0][0];
    const languageResult = languageResponse[0];
    response.send({ profileResult, languageResult });
  } catch (error) {
    response.status(500).send('Server Error');
  }
};

exports.updateLocation = async (request, response) => {
  try {
    const userId = request.id;
    const { State: location, lat, lng } = request.body;
    const data = { location, lat, lng };
    if (location && lat && lng) {
      await users.update(data, { where: { id: userId } });
      response.status(200).send('Success');
    }
  } catch (error) {
    response.status(500).send('Server Error');
  }
};
