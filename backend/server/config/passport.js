const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const Users = require('../../database/models/users');

passport.use(new LocalStrategy({
  username: 'user[username]',
  password: 'user[password]',
}, (username, password, done) => {
  Users.findOne({ username })
    .then((user) => {
      if (!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'user or password': 'is invalid' } });
      }
      return done(null, user);
    }).catch(done);
}));