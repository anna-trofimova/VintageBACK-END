const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: [{
    type: String
  }],
  description: String,
  year: Number,
  price: Number,
  category: ['clothing', 'shoes', 'accessories'],
  isBought: {
    type: Boolean,
    default: false
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
