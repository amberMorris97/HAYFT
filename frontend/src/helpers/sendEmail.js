const axios = require('axios');

const sendEmail = async body => await axios.post('/email', body);

module.exports = sendEmail;