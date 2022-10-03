// ASSERTEQUAL
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion ✅✅✅Passed: ${actual === expected}`);
  } else {
    console.log(`Assertion 🛑🛑🛑Failed: ${actual !== expected}`);
  }
};

//FINDKEY
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//TESTOBJECT
const testObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

//TEST
const test1 = findKey(testObject, x => x.stars === 2); // => "noma"
const test2 = findKey(testObject, x => x.stars < 3); // => "Blue Hill"
const test3 = findKey(testObject, x => x.stars === 4); // => undefined

assertEqual(test1, "noma");
assertEqual(test2, "Blue Hill");
assertEqual(test3, undefined);