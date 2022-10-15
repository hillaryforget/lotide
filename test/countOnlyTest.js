//MOCHA/CHAI TEST FOR COUNTONLY

const assert = require('chai').assert;
const countOnly = require('../countOnly');
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

describe('#countOnly', () => {
  it('should return 1 for result["Jason"]', () => {
    assert.strictEqual(result['Jason'], 1);
  });

  it('should return undefined for result["Karima"]', () => {
    assert.strictEqual(result['Karima'], undefined);
  });
});