const express = require('express');

const userRouter = express.Router();
const userQueue = require('./users');

userRouter.route('/').get((req, res, next) => {
  res.json(userQueue);
});

module.exports = userRouter;