//MOCHA/CHAI TEST FOR TAIL

// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['2', '3'] for ['1', '2', '3']", () => {
    assert.deepEqual(tail(['1', '2', '3']), ['2', '3']);
  });
});

it("returns [] for ['5']", () => {
  assert.deepEqual(tail(['5']), []);
});

// TAILTEST
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const words1 = ["Yo Yo"];
// tail(words1);
// assertEqual(words1.length, 1);

// const words2 = [];
// tail(words2);
// assertEqual(words2.length, 1);