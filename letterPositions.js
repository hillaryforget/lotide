//LETTERPOSITIONS FUNCTION - Write a function that takes in a string and returns all indices of letter positions in the string.

//const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
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