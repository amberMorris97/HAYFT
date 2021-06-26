const { User } = require('../../database/schemas');
const bcrypt = require('bcryptjs');

const register = async(name, username, email, password, cb) => {
  const checkUsername = await User.findOne({ username });
  if (checkUsername) return cb(400, 'username_exists');
  const user = await User.findOne({ email });
  if (user) return cb(400, 'email_exists');
  username = username.toLowerCase();
  const newUser = new User({
    name,
    username,
    email,
    password,
  });


  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hashedPwd) => {
      newUser.password = hashedPwd;
      newUser.save()
        .then(user => cb(200, user))
        .catch(err => cb(400));
    });
  });
};

module.exports = register;

