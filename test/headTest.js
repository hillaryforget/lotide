const head = require('../head');
const assertEqual = require('../assertEqual');

//TEST
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 0);
assertEqual(head([0]), 0);
assertEqual(head([null, 0, 1]), 0);