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
 
  for (let item of allItems) { //allItems not iterable? Need Help!
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

const myLetters = 'lighthouse in the house';
const result1 = countLetters(myLetters, {'lighthouse in the house': true});

//Test
assertEqual(countLetters(result1["l"], 1));
