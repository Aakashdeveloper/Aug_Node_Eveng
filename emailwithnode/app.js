const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'ahanda205@gmail.com',
  from: 'ahanda206@hotmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);