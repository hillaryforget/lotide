// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion ✅✅✅Passed: ${actual === expected}`);
  } else {
    console.log(`Assertion 🛑🛑🛑Failed: ${actual !== expected}`);
  }
};
  
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
  
// Comparing identical strings
assertEqual("Kitty", "Kitty");
  
// Comparing non-identical strings
assertEqual("Cat", "Dog");
assertEqual("high", "low");
  
// Comparing identical numbers
assertEqual(7, 7);
assertEqual(77, 77.01);
  
// Comparing non-identical numbers
assertEqual(1, 2);
assertEqual(NaN, 0);

const head = function(array) {
  if (array !== null && array.length) {
    console.log(array[0]);
  } else {
    console.log(undefined);
  }
};

//TEST
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 0);
assertEqual(head([0]), 0);
assertEqual(head([null, 0, 1]), 0);