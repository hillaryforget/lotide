//MOCHA/CHAI TEST FOR LETTERPOSITIONS

const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns 'e' for ('hello')", () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });
});

it("returns 'l' for ('hello')", () => {
  assert.deepEqual(letterPositions('hello').l, [2, 3]);
});