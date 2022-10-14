// EQOBJECTS FUNCTION - Write a function that takes in 2 objects and return true if they are equal and false otherwise.

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(object1, object) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//TEST
//assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});

