//TAIL FUNCTION - Write a function that takes in an array and returns everything except the first element of the array.

const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;