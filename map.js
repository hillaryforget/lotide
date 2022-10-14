//MAP FUNCTION - 	Write a function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.

//const words = ["Hillary", "and", "Hannah", "are", "sisters"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//TEST
//const results1 = map(words, word => word[0]);
//console.log(results1);

