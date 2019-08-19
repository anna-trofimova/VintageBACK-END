'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res, next) => {
  if (req.session.currentUser) {
    const id = req.session.currentUser._id;
    try {
      const showUser = await User.findById(id).populate('myItems');
      return res.status(200).json(showUser);
    } catch (error) {
      next(error);
    }
  } else {
    res.status(404).json({ message: 'user not logged in' });
  }
});

router.put('/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  const { username, email, phone, img } = req.body;

  try {
    const updated = await User.findByIdAndUpdate(id, {
      username,
      email,
      phone,
      img
    }, { new: true });
    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
