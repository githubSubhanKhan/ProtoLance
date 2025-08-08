require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_EMAIL_PASSWORD
  }
});

const notifyTeamMembers = async (name, email, message) => {
  const teamEmails = process.env.TEAM_EMAILS.split(","); // Comma-separated list in .env

  try {
    for (const teamEmail of teamEmails) {
      await transporter.sendMail({
        from: process.env.MY_EMAIL,
        to: teamEmail.trim(),
        subject: "New Contact Form Submission",
        text: 
`Hello,

A new contact form has been submitted on the ProtoLance website.

Name: ${name}
Email: ${email}
Message: ${message}

— This is an automated alert from the ProtoLance contact form.`
      });
      console.log(`✅ Team notification sent to ${teamEmail}`);
    }
  } catch (err) {
    console.error("❌ Team email notification error:", err.message);
  }
};

module.exports = notifyTeamMembers;