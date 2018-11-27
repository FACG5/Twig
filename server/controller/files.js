const path = require('path');

exports.get = (request, response) => {
  const { fileName } = request.params;
  const file = path.join(__dirname, '..', '..', 'uploads', fileName);
  response.sendFile(file);
};
