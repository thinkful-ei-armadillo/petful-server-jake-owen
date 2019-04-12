const express = require('express');

const dogRouter = express.Router();
const dogQueue = require('./dogs');

dogRouter.route('/').get((req, res, next) => {
  if(!dogQueue.first){
    return [];
  }
  let curr = dogQueue.first;
  let dogs = [];
  while(curr.next !== null){
    dogs.push(curr.value);
    curr = curr.next;
  }
  res.json(dogs);
});

module.exports = dogRouter;
