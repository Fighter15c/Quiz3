const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  number: Number,
  image: String,
  name: String,
  details: String,
});

module.exports = new mongoose.model("Product", productSchema);
