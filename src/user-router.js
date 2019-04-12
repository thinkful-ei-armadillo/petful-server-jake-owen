const express = require('express');

const userRouter = express.Router();
const userQueue = require('./users');

userRouter.route('/').get((req, res, next) => {
  if(!userQueue.first){
    return [];
  }
  let curr = userQueue.first;
  let users = [];
  while(curr !== null){
    users.push(curr.value);
    curr = curr.next;
  }
  res.json(users);
});

module.exports = userRouter;