const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  image: String,
  location: String,
});

module.exports = mongoose.model("Service", productSchema);
