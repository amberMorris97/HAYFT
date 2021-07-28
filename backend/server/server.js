/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const session = require('express-session');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');
const { User } = require('../database/models/users');
const users = require('./routes/api/users');
const posts = require('./routes/api/blog/posts');
const comments = require('./routes/api/blog/comments');
const replies = require('./routes/api/blog/replies');
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
app.use('/api/blog', posts);
app.use('/api/blog', comments);
app.use('/api/blog', replies);
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

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../../frontend', 'public', 'index.html'))
});


app.post('/email', (req, res) => {
  const { name, email, company, phone, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

const output = `
  <h3>Contact Info </h3>
  <p>Message from jrwebsite.com</p>
  <ul>
    <li>Name: ${name}</li>
    <li>Company: ${company}</>
    <li>Email: ${email}</li>
    <li>Phone: ${phone || 'N/A'}</li>
  </ul>
  <h3>Message</h3>
  <p>${message}</p>
`;

// Step 2
let mailOptions = {
    from: email,
    to: 'kmorris68@gmail.com',
    subject: subject,
    html: output,
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      throw err;
    }
    return res.status(200).send('Message received!');
  });
});


module.exports = app;