const express = require('express');

const dogRouter = express.Router();
const dogQueue = require('./dogs');

dogRouter.route('/').get((req, res, next) => {
  res.json(dogQueue);
});

module.exports = dogRouter;
