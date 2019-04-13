const Queue = require('./Queue');

const catQueue = new Queue();

const cats = [
  {
    imageURL:
			'http://catfriendly.com/wp-content/uploads/2016/11/Cat-Lying-Down-Red-coloring-Istock-300x300.jpg',
    imageDescription:
			'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopter: null
  },
  {
    imageURL:
			'https://www.greenpet.com.au/wp-content/uploads/2016/07/Cat-Food-Treats-300x300.jpg',
    imageDescription:
			'White bengal cat with black stripes lounging on concrete.',
    name: 'Mancat',
    sex: 'Male',
    age: 3,
    breed: 'Balinese',
    story: 'Thrown on a different street',
    adopter: null
  },
  {
    imageURL:
			'http://purrfectpals.org/wp-content/uploads/2014/03/DSC_85581-e1404783195381-300x300.jpg',
    imageDescription:
			'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fuwa',
    sex: 'Female',
    age: 3,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopter: 'Gina'
  },
  {
    imageURL:
			'http://purrfectpals.org/wp-content/uploads/2014/03/skittles-01-2-e1401393285445-300x283.jpg',
    imageDescription:
			'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Oteher',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Was supposed to be soup',
    adopter: 'Johansson'
  }
];

function QueueCats(cats) {
  cats.forEach(cat => {
    catQueue.enqueue(cat);
  });
  return catQueue;
}

QueueCats(cats);

module.exports = catQueue;
