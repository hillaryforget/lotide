//ASSERTARRAYSEQUAL FUNCTION
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};

//EQARRAYS
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//IMPLEMENT MAP
const words = ["Hillary", "and", "Hannah", "are", "sisters"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST
const results1 = map(words, word => word[0]);
console.log(results1);

