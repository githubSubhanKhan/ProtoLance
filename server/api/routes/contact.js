const express = require("express");
const router = express.Router();
const FormData = require("../models/ContactForm");

router.post("/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newForm = new FormData({ name, email, message });
    await newForm.save();

    res.status(200).json({ success: true, message: "Data saved to MongoDB" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;