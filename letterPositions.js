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

//TEST
assertArraysEqual(letterPositions("hello").e, [1]); //what is the .e?