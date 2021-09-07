const validateContactInfo = (contactInfo) => {
  const emailValidator = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
  const numValidator = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  const errorMessage = 'Field cannot be blank';

  const errors = {};

  if (!contactInfo.email.match(emailValidator)) errors.emailError = 'Invalid email';

  if (contactInfo.phone.length && !contactInfo.phone.match(numValidator)) errors.phoneError = 'Invalid number';

  if (!contactInfo.email.length) errors.emailError = errorMessage;

  if (!contactInfo.name.length) errors.nameError = errorMessage;

  if (!contactInfo.subject.length) errors.subjectError = errorMessage;

  if (!contactInfo.message.length) errors.messageError = errorMessage;

  return errors;
};

module.exports = validateContactInfo;