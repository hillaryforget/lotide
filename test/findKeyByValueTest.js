//MOCHA/CHAI TEST FOR FINDKEYBYVALUE

const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns 'a' for {a: 1, b: 2, c: 3}", () => {
    assert.strictEqual(findKeyByValue({a: 1, b: 2, c: 3}, 1),  'a');
  });
});

it("returns 'b' for {a: 1, b: 2, c: 3}", () => {
  assert.strictEqual(findKeyByValue({a: 1, b: 2, c: 3}, 2), 'b');
});