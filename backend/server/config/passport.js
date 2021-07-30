/* eslint-disable no-undef */
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../../database/models/users');

const passportConfig = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true,
  }, (username, password, done) => {
    Users.findOne({ email: username })
      .then((user) => {
        if (!user || !user.validatePassword(password)) {
          return done(null, false, { errors: { 'user or password': 'is invalid' } });
        }
        return done(null, user);
      }).catch(done);
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