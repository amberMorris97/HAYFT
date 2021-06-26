require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) return res.status(400).send('no token, access denied');

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    // req.user = decoded;
    next();
  } catch(err) {
    res.status(400).send('invalid token');
  };
};

module.exports = auth;