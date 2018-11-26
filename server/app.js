const fileUpload = require('express-fileupload');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const controller = require('./controller');

const app = express();

app.disable('x-powered-by');

app.set('port', process.env.PORT || 5000);
app.use(fileUpload());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/v1', controller);

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
