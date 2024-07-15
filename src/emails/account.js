const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendWelcomeEmail = async (email, name) => {
  const info = await transporter.sendMail({
    from: "<harshrawal0002@gmail.com>",
    to: email,
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    // html: `<h1 style="color:#fff; background-color: #b0b0b0;"> Hello ${name} </h1>`,
  });
  console.log("Message sent: %s", info.messageId);
};

const sendCancelEmail = async (email, name) => {
  const info = await transporter.sendMail({
    from: "<harshrawal0002@gmail.com>",
    to: email,
    subject: "Good Bye!",
    text: `We hope you enjoyed with us! Bye ${name}.`,
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
