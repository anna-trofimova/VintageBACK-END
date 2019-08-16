'use strict';

const express = require('express');
const router = express.Router();
const Item = require('../models/Items');

router.get('/', async (req, res, next) => {
  try {
    const listOfItems = await Item.find();
    return res.status(200).json(listOfItems);
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const newItem = req.body;
    const createItem = await Item.create(newItem);
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

router.delete('/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Item.findByIdAndDelete(id);
    return res.status(200).json({ message: 'item is deleted' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
