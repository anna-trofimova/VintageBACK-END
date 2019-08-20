const express = require('express');
const router = express.Router();

const Item = require('../models/Items');
const User = require('../models/User');
const Purchase = require('../models/Purchase');

router.get('/', async (req, res, next) => {
  try {
    const purchaseList = await Purchase.find();
    return res.status(200).json(purchaseList);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/buy', async (req, res, next) => {
  const itemId = req.params.id;
  const currentUserId = req.session.currentUser._id;
  try {
    const itemFound = await Item.findByIdAndUpdate(itemId, { isBought: true });
    const owner = await User.findOne({ myItems: itemFound._id });
    await User.findOneAndUpdate(currentUserId, { $push: { myPurchase: itemId } });
    const createdPurchase = await Purchase.create({
      ownerId: owner._id,
      userId: currentUserId,
      itemId: itemId
    });
    return res.status(200).json({ createdPurchase, itemFound, owner });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
