// const middle = require('../middle');

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(middle(['5']), '5');
});

//MIDDLETEST
// console.log(middle([1]));// => []
// console.log(middle([1, 2]));// => []

// console.log(middle([1, 2, 3]));// => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]