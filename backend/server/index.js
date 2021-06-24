const app = require('./server');

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});

module.exports = app;