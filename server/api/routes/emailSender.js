const nodemailer = require("nodemailer");
const generateResponse = require("../utils/generateResponse");
require("dotenv").config();

/**
 * Sends a personalized, AI-generated business email to user.
 * @param {string} name - User's name
 * @param {string} email - User's email address
 * @param {string} message - User's original message
 */
const sendEmail = async (name, email, message) => {
  try {
    const prompt = `You are a polite assistant representing ProtoLance, a professional business website development company. A user named "${name}" submitted the following message:\n\n"${message}"\n\nWrite ONLY the body of a warm, friendly, and professional email in response. 
Do NOT include a subject line. The structure must be:
1. Start with: "Hi ${name},"
2. Thank them for reaching out to ProtoLance with their inquiry. 
3. Acknowledge their interest briefly. 
4. Politely ask for their availability in their own country's or state’s standard time to schedule a Google Meet session for further discussion.
5. End with: "Best regards,\nProtoLance"`;


    const emailBody = await generateResponse(prompt);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thanks for Contacting Us!",
      html: `<p>${emailBody.replace(/\n/g, "<br>")}</p>`
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${email}`);
  } catch (err) {
    console.error("❌ Email Send Error:", err.message);
    throw err; // propagate error to calling route
  }
};

module.exports = sendEmail;
