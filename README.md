# lotide

A mini clone of the [Lodash](https://lodash.com) library.
## Purpose
**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**
This project was created and published by me as part of my learnings at Lighthouse Labs. 
## Usage
**Install it:**
`npm install @hillaryforget/lotide`
**Require it:**
`const _ = require('@hillaryforget/lotide');`
**Call it:**
`const results = _.tail([1, 2, 3]) // => [2, 3]`
## Documentation

The following functions are currently implemented:


assertEqual(): takes in 2 values (primitive) and prints a pass/fail message to the console if they are equal or not.

assertArraysEqual: takes in 2 objects and prints a pass/fail message to the console if they are equal or not.

assertObjectsEqual: takes in 2 objects and prints a pass/fail message to the console if they are equal or not.

countLetters(): takes in a sentence and returns a count of each of the letters in the sentence.

countOnly(): takes in a collection of items and returns a specific subset of those items.

eqArrays(): takes in 2 arrays and returns true if the arrays are equal and false otherwise.

findKey(): takes in an object and callback and returns the first key that meets the criteria specified in callback.

findKeyByValue: takes in an object and a value and returns the first key that corresponds to that value.

flatten(): take an array containing elements including nested arrays and returns a flattened version of the array.

head(): takes an array and returns the first element in the array.

letterPositions(): takes in a string and returns all indices of letter positions in the string.

map(): takes an array and callback funciton and returns a new array based on the results of the callback function.

middle(): takes in an array and returns middle most element of the array.

tail(): takes an array and returns array with every element except the head (first element) of the array.

takeUntil(): takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

without(): takes in a source array and an items to remove array and returns only the items from the source array that are not in the items to remove array