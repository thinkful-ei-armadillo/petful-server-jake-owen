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
    adopter: null
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
    adopter: null
  },
  {
    imageURL:
			'https://www.northeastanimalshelter.org/wp-content/uploads/2019/04/Texarkana.118915-300x300.jpg',
    imageDescription:
			'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Cat',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopter: null
  },
  {
    imageURL:
			'http://djz0rrcixveiv.cloudfront.net/wp-content/uploads/2014/04/button_kittens-300x300.jpg',
    imageDescription:
			'White bengal cat with black stripes lounging on concrete.',
    name: 'Lion',
    sex: 'Male',
    age: 3,
    breed: 'Balinese',
    story: 'Thrown on a different street',
    adopter: null
  },
  {
    imageURL:
			'https://arkanimalrescue.co.uk/wp-content/uploads/2018/10/fendi1-300x300.jpg',
    imageDescription:
			'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Food',
    sex: 'Female',
    age: 3,
    breed: 'Bengal',
    story: 'Thrown on the street',
    adopter: null
  },
  {
    imageURL:
			'https://premiumtufflock.com/wp-content/uploads/2014/07/Premium-TuffLock-Cat-900px-300x300.jpg',
    imageDescription:
			'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Dog',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Was supposed to be soup',
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
