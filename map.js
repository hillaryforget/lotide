//IMPLEMENT MAP
const words = ["Hillary", "and", "Hannah", "are", "sisters"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//TEST
// const results1 = map(words, word => word[0]);
// console.log(results1);

