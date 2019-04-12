const express = require('express');

const catRouter = express.Router();
const catQueue = require('./cats');

catRouter.route('/').get((req, res, next) => {
  if(!catQueue.first){
    return [];
  }
  let curr = catQueue.first;
  let cats = [];
  while(curr !== null){
    cats.push(curr.value);
    curr = curr.next;
  }
  res.json(cats);
});

catRouter.route('/').delete((req, res, next) => {
  catQueue.dequeue();
  res.status(204).end();
});

module.exports = catRouter;
