require('dotenv').config();
const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URL;
mongoose.set('useFindAndModify', false);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
module.exports = db;