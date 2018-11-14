const app = require('./app');

const port = app.get('port');

app.listen(port, () => console.log(`the server started on port ${port}`));
