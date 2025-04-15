const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  inventoryItem: { type: mongoose.Schema.Types.ObjectId, ref: 'InventoryItem' },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  status: { type: String, required: true, default: 'reserved' } // reserved, cancelled, completed
});

module.exports = mongoose.model('Reservation', reservationSchema);
