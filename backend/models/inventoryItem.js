const mongoose = require('mongoose');

const motorcycleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  model: String,
  price: Number,
  description: String,
  image: String, // URL to the image
  inStock: Boolean, // Whether the motorcycle is in stock
});

module.exports = mongoose.model('Motorcycle', motorcycleSchema);
