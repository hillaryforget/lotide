//HEAD FUNCTION - Write a function that takes in an array and returns the first element in the array.

const head = function(array) {
  if (array !== null && array.length) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;