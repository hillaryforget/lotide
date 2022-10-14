const assert = require('chai').assert;
const map   = require('../map');

describe("#map", () => {
  it("returns [] for map([1])", () => {
    assert.deepEqual(map([1]), []);
  });
});

it("returns [] for map([1, 2])", () => {
  assert.deepEqual(map([1, 2]), []);
});

//TEST
//const results1 = map(words, word => word[0]);
//console.log(results1);