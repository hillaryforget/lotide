//TAKEUNTIL FUNCTION - Write a function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

const takeUntil = function(array, callback) {
  let result = [];
  for (let value of array) {
    if (!callback(value)) {
      result.push(value);
    } else if (callback(value)) {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;

//TEST
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);