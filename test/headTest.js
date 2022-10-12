// const head = require('../head');
// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5');
});

//HEAD TEST
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 0);
// assertEqual(head([0]), 0);
// assertEqual(head([null, 0, 1]), 0);