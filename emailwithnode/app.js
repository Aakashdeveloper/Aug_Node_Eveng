const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('');
const msg = {
  to: 'ahanda205@gmail.com',
  from: 'ahanda206@hotmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);