//MOCHA/CHAI TEST FOR EQOBJECTS

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns 'true' for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.strictEqual(eqObjects(['1', '2', '3'], ['1', '2', '3']), true);
  });
});

it("returns 'false' for ['1', '2', '3'], ['3', '2', '1']", () => {
  assert.strictEqual(eqObjects(['1', '2', '3'], ['3', '2', '1']), false);
});