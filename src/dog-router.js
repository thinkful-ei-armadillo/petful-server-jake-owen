const express = require('express');

const dogRouter = express.Router();
const dogs = require('./dogs');

dogRouter.route('/').get((req, res, next) => {
  res.json(dogs);
});

module.exports = dogRouter;
