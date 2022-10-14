//COUNTLETTERS FUNCTION - Write a function that takes in a sentence and returns a count of each of the letters in the sentence.

//const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  let result = {};
  let newString = string.split('');

  for (let letter of newString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

//TEST
// console.log(assertEqual(countLetters(myString)['l'], 1));
// console.log(assertEqual(countLetters(myString)['i'], 2));
// console.log(assertEqual(countLetters(myString)['h'], 4));
// console.log(assertEqual(countLetters(myString)[' '], 3));


