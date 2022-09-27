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
    if (array1[i] !== array2[i]) { //why type error for length? Need Help!
      return false;
    }
  }
  return true;
};

//LETTERPOSITIONS
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if ()
    return results;
}
};

//TEST
assertArraysEqual(letterPositions("hello").e, [1]); //what is the .e?