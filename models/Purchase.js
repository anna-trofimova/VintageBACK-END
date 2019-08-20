const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const purchaseSchema = new Schema({
  ownerId: [{
    type: ObjectId,
    ref: 'User'
  }],
  itemId: [{
    type: ObjectId,
    ref: 'Item'
  }]
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
