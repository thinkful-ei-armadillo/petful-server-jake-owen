const express = require('express');

const catRouter = express.Router();
const catQueue = require('./cats');

catRouter.route('/').get((req, res, next) => {
  //error handling?
  // if (!cats) {
  //   res.status(400, 'no cats to be adopted');
  // }
  res.json(catQueue);
});

module.exports = catRouter;
