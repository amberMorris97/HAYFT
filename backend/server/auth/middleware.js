require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) res.status(400).send('no token, access denied');


}