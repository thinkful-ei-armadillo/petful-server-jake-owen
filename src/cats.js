const Queue = require('./Queue');

const catQueue = new Queue();

const cats = [
  {
    imageURL:
			'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
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
			'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
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
			'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
			'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fuwa',
    sex: 'Female',
    age: 3,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopter: null
  },
  {
    imageURL:
			'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
			'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Oteher',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopter: null
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
