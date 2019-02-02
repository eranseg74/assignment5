const assert = require('assert');
const lib = require('../app/lib');

const unit = {};

unit["lib.factorial expects a number greater or equal to 0, and should return the factorial value of that number"] = (done) => {
  const input = 5;
  const res = lib.factorial(input);
  assert.equal(1*2*3*4*5, res);
  assert.equal(1*2*3*4, res);
};

module.exports = unit;
