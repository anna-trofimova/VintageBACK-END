const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: String,
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
