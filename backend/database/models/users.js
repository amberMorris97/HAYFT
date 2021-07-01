const mongoose = require('mongoose');
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

UsersSchema.methods.setPassword = function(password) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hashedPwd) => {
      this.password = hashedPwd;
    });
  });
};

UsersSchema.methods.validatePassword = async function(password) {
  console.log(this, 'THIS password')
  const checkMatch = await bcrypt.compare(password, this.password);
  return checkMatch || false;
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
    token: this.generateJWT(),
  };
};

const Users = mongoose.model('Users', UsersSchema);
module.exports = Users;