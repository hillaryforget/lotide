const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

//ASSERTARRAYSEQUAL TEST
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS