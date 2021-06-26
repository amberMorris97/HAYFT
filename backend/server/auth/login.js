const { User } = require('../../database/schemas');
const bcrypt = require('bcryptjs');

const login = async(username, password, cb) => {
  let user;
  if (username.includes('@')) {
     user = await User.findOne({ email: username });
  } else {
      user = await User.findOne({ username });
  }
  if (!user) return cb(400, 'no_user_found');

  const checkMatch = await bcrypt.compare(password, user.password);
  if (!checkMatch) {
    cb(400, 'bad_password');
  } else {
    cb (200, user);
  }
}

module.exports = login;