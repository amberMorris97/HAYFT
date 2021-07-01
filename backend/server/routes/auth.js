const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;
  console.log(req.headers)
  if (authorization && authorization.split(' ')[0] === 'Token') {
    console.log(authorization.split(' ')[1], 'AUTH TOKEN')
    return authorization.split(' ')[1];
  }
  return null;
};

const auth = {
  required: jwt({
    secret: 'secret',
    algorithms: ['HS256'],
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: 'secret',
    algorithms: ['HS256'],
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

module.exports = auth;