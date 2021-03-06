const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  registrationDate: {
    type: String

  },
  myItems: [{
    type: ObjectId,
    ref: 'Item'
  }],
  myPurchase: [{
    type: ObjectId,
    ref: 'Purchase'
  }],
  imageUrl: [{
    type: String
  }]

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
