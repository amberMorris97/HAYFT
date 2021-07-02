const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const sessionsSchema = new mongoose.Schema({
  token: String,
  userId: String,
  expiration: String,
});

const Sessions = mongoose.model('Sessions', postSchema);

module.exports = Sessions;
