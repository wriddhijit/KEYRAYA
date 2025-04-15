const InventoryItem = require('../models/inventoryItem');

exports.addItem = async (req, res) => {
  try {
    const { title, category, style, brand, color, size, price, availability } = req.body;
    const item = new InventoryItem({ title, category, style, brand, color, size, price, availability });
    await item.save();
    res.status(201).send('Item added');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await InventoryItem.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
