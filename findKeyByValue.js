// const assertEqual = require('./assertEqual');

// eslint-disable-next-line no-unused-vars
const bestTvShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

// eslint-disable-next-line no-unused-vars
const tvShows = [];

const findKeyByValue = function(tvShows, value) {
  //console.log('test', tvShows, value);
  for (const key of Object.keys(tvShows)) {
    if (value === tvShows[key]) {
      return key;
    }
    //console.log(tvShows[key]);
  }
};

module.exports = findKeyByValue;

//TEST
//assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);