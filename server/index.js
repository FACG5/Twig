const app = require('./app');
const { connection } = require('./database/models');

const port = app.get('port');
connection.sync().then(() => {
  app.listen(port, () => console.log(`the server started on port ${port}`));
});
