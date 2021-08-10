/* eslint-disable no-undef */
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../../database/models/users');
const bcrypt = require('bcryptjs');

const passportConfig = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true,
  }, (username, password, done) => {
    Users.findOne({ email: username })
      .then(async(user) => {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) return done(null, user);
        else return done(null, false, { error: 'invalid credentials' });
      })
      .catch((err) => {
        throw err;
      });
  }));

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await Users.findOne({_id:mongoose.Types.ObjectId(`${id}`)});

    user ? done(null, user) : done(null);
  });
};
module.exports = passportConfig;