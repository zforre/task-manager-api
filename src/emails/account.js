const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "zachforre@gmail.com",
    subject: "Thanks for joining",
    text: `Welcome to the Task Manager, ${name}. Let me know how you get along in the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "zachforre@gmail.com",
    subject: "Sorry to see you go!",
    text: `Hi ${name}, we noticed you cancelled your account with us. It would be great if you could leave us some feedback so we can improve our service.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
