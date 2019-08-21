'use strict';

const express = require('express');
const router = express.Router();
const Item = require('../models/Items');
const User = require('../models/User');
const Purchase = require('../models/Purchase');

router.get('/', async (req, res, next) => {
  try {
    const listOfItems = await Item.find();
    return res.status(200).json(listOfItems);
  } catch (error) {
    next(error);
  }
});

router.get('/myItems', async (req, res, next) => {
  const userId = req.session.currentUser._id;
  try {
    const myItems = await Item.find(userId);
    return res.status(200).json(myItems);
  } catch (error) {
    next(error);
  }
});

router.get('/:id/details', async (req, res, next) => {
  const { id } = req.params;
  try {
    const itemDetails = await Item.findById(id);
    return res.status(200).json(itemDetails);
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const newItem = req.body;
    const createItem = await Item.create(newItem);
    const itemId = createItem._id;
    const userId = req.session.currentUser._id;
    const user = await User.findByIdAndUpdate(userId, { $push: { myItems: itemId } });
    req.session.currentUser = user;
    return res.status(200).json(createItem);
  } catch (error) {
    next(error);
  }
});

router.put('/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  const changedItem = req.body;
  console.log(req.body);
  try {
    const updated = await Item.findByIdAndUpdate(id, changedItem, { new: true });
    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  const { idUser } = req.body;
  try {
    await Item.findByIdAndDelete(id);
    const userItems = await User.findByIdAndUpdate(idUser, { $pull: { myItems: id } }, { new: true });
    const purchases = await Purchase.find({ itemId: id });
    for (let i = 0; i < purchases.length; i++) {
      await User.updateMany({ myPurchase: purchases[i]._id }, { $pull: { myPurchase: purchases[i]._id } });
    }
    return res.status(200).json(userItems);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
