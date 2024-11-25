require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server setup
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// Create transporter using your SMTP settings
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Using SSL
  auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.EMAIL_PASS, // your email password or app-specific password
  },
});

// Route to handle contact form submission
router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  // Mail options
  const mailOptions = {
    from: `"${name}" <${email}>`, // sender's email
    to: process.env.EMAIL_USER, // receiver's email
    subject: "Contact Form Submission - Portfolio", // subject of the email
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `, // body of the email with the message from the user
  };

  // Send email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res
        .status(500)
        .json({ code: 500, status: "Error sending message" });
    } else {
      console.log("Message Sent: " + info.response);
      return res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Route to handle newsletter subscription
router.post("/subscribe", (req, res) => {
  const email = req.body.email;

  // Mail options for subscription confirmation
  const mailOptions = {
    from: process.env.EMAIL_USER, // sender's email
    to: email, // receiver's email
    subject: "Newsletter Subscription Confirmation", // subject of the email
    html: `<p>Thank you for subscribing to our newsletter!</p>`, // body of the email
  };

  // Send email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res
        .status(500)
        .json({ code: 500, status: "Error sending subscription confirmation" });
    } else {
      console.log("Subscription Confirmation Sent: " + info.response);
      return res
        .status(200)
        .json({ code: 200, status: "Subscription Confirmed" });
    }
  });
});
