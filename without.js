//WITHOUT FUNCTION - Write a function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.

//const assertArraysEqual = require('./assertArraysEqual');

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
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);