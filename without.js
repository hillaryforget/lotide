//const eqArrays = require('./eqArrays');
//const assertArraysEqual = require('./assertArraysEqual');

//WITHOUT
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    newArr.push(source[i]);
  }
  for (let j = 0; j < itemsToRemove.length; j++) {
    newArr.pop();
  }
  return newArr;
};

module.exports = without;

//TEST
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"])

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);