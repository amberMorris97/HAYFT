const mongoose = require('mongoose');
const { User } = require('../../database/schemas');

const cookieParser = async (req, res) => {
  let user;
  const { cookie } = req.headers;
  console.log(cookie)
  // if (cookie) {
  //   const cookieArr = cookie.split(";").join('').split('=')[1].split('.').slice(0, 2);
  //   const getToken = cookieArr.map((el) => JSON.parse(Buffer.from(el, 'base64').toString()));
  //   const { id } = getToken[1];
  //   user = await User.findOne({_id:mongoose.Types.ObjectId(`${id}`)});
  // }
  return user || {};
  // next();
}

module.exports = cookieParser;

// create an object for two arrays
// if the second array is empty, then you can render the first
// if there is an object inside the second array, iterate over that instead

// force to component to update, push the value into the array