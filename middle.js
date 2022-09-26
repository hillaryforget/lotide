//EQARRAYS
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
    
// TEST
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
    
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
  
//ASSERTARRAYSEQUAL FUNCTION
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};
  
//TEST
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

//MIDDLE
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let evenArr = array.length % 2 === 0;
  if (!evenArr) {
    return [array[Math.floor(array.length / 2)]];
  }
  const middleElement = (array.length / 2);
  return [array[middleElement - 1], array[middleElement]];
};
  
//TEST CODE
console.log(middle([1]));// => []
console.log(middle([1, 2]));// => []

console.log(middle([1, 2, 3]));// => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]