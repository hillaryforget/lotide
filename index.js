const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head   = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail   = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail:   tail,
  middle: middle,
  flatten: flatten,
  without: without,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  eqArrays: eqArrays,
  countLetters: countLetters,
  letterPositions: letterPositions,
  countOnly: countOnly,
  map: map,
  eqObjects:eqObjects,
  takeUntil: takeUntil
};