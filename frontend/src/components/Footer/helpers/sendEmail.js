const axios = require('axios');

export const sendEmail = async body => await axios.post('/email', body);
