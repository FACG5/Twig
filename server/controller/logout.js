exports.get = (request, response) => {
  response.clearCookie('jwt');
  response.status(200).send('Logged out .. ');
};
