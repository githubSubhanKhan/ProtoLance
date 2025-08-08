const express = require("express");
const router = express.Router();
const FormData = require("../models/ContactForm");
const sendEmail = require("./emailSender");
const sendWhatsAppNotification = require("../utils/whatsappNotification");
const notifyTeamMembers = require("../utils/notifyTeamMembers");

router.post("/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newForm = new FormData({ name, email, message });
    await newForm.save();

    await sendEmail(name, email, message);

    // await sendWhatsAppNotification(name, email, message);

    await notifyTeamMembers(name, email, message);

    res.status(200).json({ success: true, message: "Data saved and email sent!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;