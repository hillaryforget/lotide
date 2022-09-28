// ASSERTEQUAL
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion ✅✅✅Passed: ${actual === expected}`);
  } else {
    console.log(`Assertion 🛑🛑🛑Failed: ${actual !== expected}`);
  }
};

const bestTvShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

const tvShow = [];

const findKeyByValue = function(tvShows, value) {
  //console.log('test', tvShows, value);
  for (const key of Object.keys(tvShows)) {
    if (value === tvShows[key]) {
      return key;
    }
    //console.log(tvShows[key]);
  }
};

//TEST
assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);