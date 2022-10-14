const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

//LETTERPOSITIONS
//output each letter : where they are in the index
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== ' ') {
      if (results[character]) {
        results[character].push(i);
      } else {
        results[character] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

//TEST
// assertArraysEqual(letterPositions("hello").e, [1]); //what is the .e?