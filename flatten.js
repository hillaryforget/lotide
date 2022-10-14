//FLATTEN FUNCTION - Write a function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.

const flatten = function(arr) {
  let newArr = [];

  for (let value of arr) {
    if (Array.isArray(value)) {
      newArr = newArr.concat(flatten(value));
    } else {
      newArr.push(value);
    }
  }
  return newArr;
};
 
module.exports = flatten;

//TEST
//console.log(flatten([1, 2, [3, 4], 5, [6]]));
//console.log(typeof newArr);