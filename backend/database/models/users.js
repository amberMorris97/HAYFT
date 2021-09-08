const mongoose = require('mongoose');
const db = require('../index');
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

UsersSchema.methods.setPassword = async function(password) {
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  this.password = hashedPassword;
};

UsersSchema.methods.validatePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  (isMatch)
  return isMatch;
};

UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);
  return jwt.sign({
    username: this.username,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
};

UsersSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    name: this.name,
    username: this.username,
    email: this.email,
  };
};

const Users = db.model('Users', UsersSchema);
module.exports = Users;