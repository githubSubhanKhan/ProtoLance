const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ContactForm", ContactFormSchema);