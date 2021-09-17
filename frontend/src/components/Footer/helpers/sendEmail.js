import axios from 'axios';

const sendEmail = async body => await axios.post('/email', body);

export default sendEmail;
