//EQOBJECTS FUNCTION - Returns true if both objects have identical keys with identical values. Otherwise you get back a big fat false!

const eqArrays = require('./eqArrays');
//const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  
  console.log(key1, key2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let i = 0; i < key1.length; i++) {
    const value1 = object1[key1[i]];

    const value2 = object2[key1[i]];
    console.log(Array.isArray(value1));

    if (Array.isArray(value1)) {
      if (eqArrays(value1, value2)) {
        return true;
      }
    }
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

//if both values are arrays: pass them to eqArrays, returns true.
//Otherwise (else): assume that they are primitives and continue to use === to compare the two values.

//TEST
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false