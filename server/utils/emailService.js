const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (email, token) => {
  const verificationLink = `${process.env.BASE_URL}/verify/${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Verification",
    html: `<h2>Verify Your Email</h2>
           <p>Click the link below to verify your email:</p>
           <a href="${verificationLink}">Verify Email</a>`,
  };

  try {
    console.log("📧 Sending email to:", email);
    console.log("🔗 Verification link:", verificationLink);
    await transporter.sendMail(mailOptions);
    console.log("✅ Verification email sent to", email);
  } catch (error) {
    console.error("❌ Error sending verification email:", error);
  }
};

module.exports = sendVerificationEmail;
