//FINDKEY FUNCTION - Write a function that takes in an object and callback and returns the first key that meets the criteria specified in callback.

//const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//TESTOBJECT
// const testObject = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

module.exports = findKey;

//TEST
// const test1 = findKey(testObject, x => x.stars === 2); // => "noma"
// const test2 = findKey(testObject, x => x.stars < 3); // => "Blue Hill"
// const test3 = findKey(testObject, x => x.stars === 4); // => undefined

// assertEqual(test1, "noma");
// assertEqual(test2, "Blue Hill");
// assertEqual(test3, undefined);