const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const UsersSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

UsersSchema.methods.setPassword = (password) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hashedPwd) => {
      this.password = hashedPwd;
    });
  });
};

UsersSchema.methods.validatePassword = async (password) => {
  const checkMatch = await bcrypt.compare(password, this.password);
  return checkMatch || false;
};

UsersSchema.methods.generateJWT = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
};

UsersSchema.methods.toAuthJSON = () => {
  console.log(this)
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT()
  };
};

mongoose.model('Users', UsersSchema);