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

const findKeyByValue = function() {

  for (const value of tvShow) {
    const bestTvShowsByGenre = bestTvShowsByGenre[value.bestTvShowsByGenre];
    console.log(Object.keys(bestTvShowsByGenre));
  }
};

//TEST
assertEqual(findKeyByValue(bestTvShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTvShowsByGenre, "That '70s Show"), undefined);