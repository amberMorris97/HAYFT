const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const session = require('express-session');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const { Post } = require('../database/schemas');
const { User } = require('../database/models/users');
const users = require('./routes/api/users')
const MongoStore = require('connect-mongo');
const app = express();

require('dotenv').config();
require('./config/passport');


app.use(express.json());
app.use(session({
  secret: process.env.JWT_SECRET,
  saveUninitialized: true,
  resave: true,
  cookie: {
    path: '/',
    maxAge: 3600000,
    httpOnly: true,
    secure: false,
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    ttl: 1 * 1 * 60 * 60,
    autoRemove: 'native',
  }),
}));
app.use(require('./routes'));
app.use('/api/users', users);
// use users file to handle endpoints that start with / login

app.get('/end', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    res.clearCookie('Token');
    res.send('logged out');
  });
});

app.use(express.static(path.join(__dirname, '../../frontend/public')));


module.exports = app;