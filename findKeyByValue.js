//FINDKEYBYVALUE FUNCTION - Write a function that takes in an object and a value and returns the first key that corresponds to that value.

//const assertEqual = require('./assertEqual');

// const bestTvShowsByGenre = {
//   sciFi: 'The Expanse',
//   comedy: 'Brooklyn Nine-Nine',
//   drama: 'The Wire'
// };

// const tvShows = [];

const findKeyByValue = function(tvShows, value) {
  for (const key of Object.keys(tvShows)) {
    if (value === tvShows[key]) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

//TEST
//assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);