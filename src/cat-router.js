const express = require('express');

const catRouter = express.Router();
const catQueue = require('./cats');

catRouter.route('/').get((req, res, next) => {
  if(!catQueue.first){
    return [];
  }
  let curr = catQueue.first;
  let cats = [];
  while(curr.next !== null){
    cats.push(curr.value);
    curr = curr.next;
  }
  res.json(cats);
});

module.exports = catRouter;
