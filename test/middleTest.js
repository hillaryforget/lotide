// const middle = require('../middle');

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [] for middle([1])", () => {
    assert.deepEqual(middle([1]), []);
  });
});

it("returns [] for middle([1, 2])", () => {
  assert.deepEqual(middle([1, 2]), []);
});

//MIDDLETEST
// console.log(middle([1]));// => []
// console.log(middle([1, 2]));// => []

// console.log(middle([1, 2, 3]));// => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]