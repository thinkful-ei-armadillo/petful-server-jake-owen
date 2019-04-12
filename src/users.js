const Queue = require('./Queue');

const userQueue = new Queue();

const users = [
  {name: 'John',
    pet: 'Heph'},
  {name: 'Gina',
    pet: 'Fuwa'}
];

function QueueUsers(users){
  users.forEach(user => {
    userQueue.enqueue(user);
  });
}

QueueUsers(users);

module.exports = userQueue;