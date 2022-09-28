// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion ✅✅✅Passed: ${actual === expected}`);
  } else {
    console.log(`Assertion 🛑🛑🛑Failed: ${actual !== expected}`);
  }
};

//COUNTLETTERS
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

const myString = "lighthouse in the house";
console.log(countLetters(myString));

//TEST
console.log(assertEqual(countLetters(myString)['l'], 1));
console.log(assertEqual(countLetters(myString)['i'], 2));
console.log(assertEqual(countLetters(myString)['h'], 4));
console.log(assertEqual(countLetters(myString)[' '], 3));