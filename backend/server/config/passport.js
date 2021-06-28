const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { Users } = require('../../database/models/users');

passport.use(new LocalStrategy({
  email: 'user[name]',
  password: 'user[password]',
}, (email, password, done) => {
  Users.findOne({ email })
    .then((user) => {
      console.log(user)
      if (!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }
      return done(null, user);
    }).catch(done);
}));