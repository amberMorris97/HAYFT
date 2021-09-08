const app = require('./server');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  (`App is listening on port: ${PORT}`);
});

module.exports = app;

