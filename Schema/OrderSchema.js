const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Guests: String,
  Message: String,
  Name: String,
  Phone: String,
  Surname: String,
  serviceID: {
    type: String,
    required: true,
  },
  serviceLocation: String,
  servicePrice: Number,
  serviceTitle: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Order", OrderSchema);
