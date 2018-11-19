const { verify } = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  const { jwt } = req.cookies;
  if (jwt) {
    verify(jwt, process.env.SECRET, (err, result) => {
      if (err) {
        res.status(401).send({ err: 'unAuthorized, wrong in token' });
      } else {
        const { id } = result;
        req.id = id;
        next();
      }
    });
  } else {
    res.status(401).send({ err: 'unAuthorized, you are not logged in' });
  }
};

module.exports = checkToken;
