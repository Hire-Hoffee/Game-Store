const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const createHttpError = require("http-errors");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: (process.env.EMAIL_PORT = "465" ? true : false),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: {
      extName: ".hbs",
      layoutsDir: path.join(__dirname, "..", "views"),
      defaultLayout: "layout.hbs",
    },
    viewPath: path.join(__dirname, "..", "views", "email"),
    extName: ".hbs",
  })
);

async function sendEmail({ from, to, subject, template, context }) {
  try {
    const credentials = { from, to, subject, template, context };
    await transporter.sendMail(credentials);
    console.log("\nEmail has been sent\n");
    return;
  } catch (error) {
    console.log(error);
    throw createHttpError(500, "Failed to send email");
  }
}

module.exports = sendEmail;
