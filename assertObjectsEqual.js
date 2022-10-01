//EQOBJECTS
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  
  console.log(key1, key2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let i = 0; i < key1.length; i++) {
    const value1 = object1[key1[i]];

    const value2 = object2[key1[i]];
    console.log(Array.isArray(value1));

    if (Array.isArray(value1)) {
      if (eqArrays(value1, value2)) {
        return true;
      }
    }
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

//ASSERTARRAYSEQUAL
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(object1, object) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});

