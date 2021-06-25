const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/hayft';
mongoose.set('useFindAndModify', false);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

module.exports = db;