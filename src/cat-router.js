const express = require('express');

const catRouter = express.Router();
const cats = require('./cats');

catRouter.route('/').get((req, res, next) => {
  //error handling?
  // if (!cats) {
  //   res.status(400, 'no cats to be adopted');
  // }
  res.json(cats);
});

module.exports = catRouter;
