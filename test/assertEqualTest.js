const assertEqual = require('../assertEqual');

// ASSERTEQUALTEST
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

