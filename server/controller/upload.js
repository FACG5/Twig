const fs = require('fs');

exports.post = (request, response) => {
  const { file } = request.files;
  const { name, data } = file;
  const splitName = name.split('.');
  const nameOfFile = Date.now()
    .toString(16)
    .toUpperCase();
  const ext = splitName[1];
  const fullName = `${nameOfFile}.${ext}`;
  fs.writeFile(`uploads/${fullName}`, data, (err) => {
    if (err) {
      response.status(500).send('Server Error !');
    }
    response.status(200).send(fullName);
  });
};
