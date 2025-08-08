const twilio = require('twilio');
require('dotenv').config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

/**
 * Sends a WhatsApp notification to you when someone submits the contact form.
 * @param {string} name - User's name
 * @param {string} email - User's email address
 * @param {string} message - User's message
 */

const sendWhatsAppNotification = async (name, email, message) => {
  try {
    await client.messages.create({
      body: `📩 New Contact Form Submission!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`, // Twilio sandbox WhatsApp number
      to: `whatsapp:${process.env.MY_WHATSAPP_NUMBER}`  // Your personal WhatsApp number
    });
    console.log('✅ WhatsApp notification sent!');
  } catch (err) {
    console.error('❌ WhatsApp notification error:', err.message);
  }
};

module.exports = sendWhatsAppNotification;