// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion ✅✅✅Passed: ${actual === expected}`);
  } else {
    console.log(`Assertion 🛑🛑🛑Failed: ${actual !== expected}`);
  }
};

//countLetters
const countLetters = function(allItems, lettersToCount) {
  const result = {};
 
  for (let item of allItems) {
    if (lettersToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

const myLetters = 'LHL';
const result1 = countLetters(myLetters, ('LHL'));

//Test
assertEqual(countLetters(result1["L"], 2));
assertEqual(countLetters(result1["H"], 1));