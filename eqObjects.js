// ASSERTEQUAL
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion ✅✅✅Passed: ${actual === expected}`);
  } else {
    console.log(`Assertion 🛑🛑🛑Failed: ${actual !== expected}`);
  }
};

//EQARRAYS
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//EQOBJECTS
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  
  console.log(key1, key2);

  if (key1.length !== key2.length) {
    return false;
  }
  // if (!eqArrays(key1, key2)) {
  //   return false;
  // } else {
    
  for (let i = 0; i < key1.length; i++) {
    const value1 = object1[key1[i]];
    console.log('test value', value1);

    const value2 = object2[key1[i]];
    console.log('test value2', value2);

    console.log(Array.isArray(value1));

    if (Array.isArray(value1)) {
      console.log('value1 is array');
      if (eqArrays(value1, value2)) {
        console.log('arrays are the same');
        return true;
      }
        
    }
    if (value1 !== value2) {
      console.log('values are not the same', value1, value2);
      return false;
    }
  }
  console.log('returning true');
  return true;
};

//if (console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
//console.log('test', eqArrays(key1, key2)); // => false)

//if both values are arrays: pass them to eqArrays, returns true.
//Otherwise (else): assume that they are primitives and continue to use === to compare the two values.

//TEST
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false