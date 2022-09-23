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

const tail = function(arr) {
  let newArray = arr.slice(1);
  console.log(newArray);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words1 = ["Yo Yo"];
tail(words1);
assertEqual(words1.length, 1);

const words2 = [];
tail(words2);
assertEqual(words2.length, 1);