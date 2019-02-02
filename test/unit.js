const assert = require('assert');
const lib = require('../app/lib');

const unit = {};

// Assert that the factorial function is returning the factorial of the given number
unit["lib.factorial expects a number greater or equal to 0, and should return the factorial value of that number"] = (done) => {
  const input = 5;
  const res = lib.factorial(input);
  assert.equal(1*2*3*4*5, res);
  done();
};

// Assert that the palindrome function returns true if the given string is actually palindrome
unit["lib.palindrome(str) - Test if a given string is a palindrome"] = (done) => {
  const str = "Eran7447narE";
  assert.ok(typeof(str) == 'string');
  assert.ok(lib.palindrome(str), "String is not a palindrome");
  done();
};

// Assert that the palindrome function returns true if the given number is actually palindrome
unit["lib.palindrome(num) - Test if a given number is a palindrome"] = (done) => {
  const num = 123454321;
  assert.ok(typeof(num) == 'number');
  assert.ok(lib.palindrome(num), "String is not a palindrome");
  done();
};

// Assert that the randomString function returns a string with the length equal to the given number
unit["lib.randomString(strLen) - Creates a random string containing only letters and digits, with a length equal to the given parameter"] = (done) => {
  const strLength = 15;
  assert.ok(typeof(strLength) == 'number', "Expects to get a number as an input - "+strLength);
  assert.equal(lib.randomString(strLength).length, strLength, "Problem with the string - " + lib.randomString(strLength));
  done();
};

// Assert that the shifted function returns a string shifted to the right when given a positive number of shifts
unit["lib.shift(strLen) - Shifts the string to the right, when given a positive value"] = (done) => {
  const str = "eransegal";
  const shiftSteps = 3;
  assert.ok(typeof(str) == 'string');
  assert.ok(typeof(shiftSteps) == 'number');
  assert.equal(lib.shift(str, shiftSteps), "galeranse", "Wrong result - " + lib.shift(str, shiftSteps));
  done();
};

// Assert that the shifted function returns a string shifted to the left when given a negative number of shifts
unit["lib.shift(strLen) - Shifts the string to the left, when given a negative value"] = (done) => {
  const str = "eransegal";
  const shiftSteps = -3;
  assert.ok(typeof(str) == 'string');
  assert.ok(typeof(shiftSteps) == 'number');
  assert.equal(lib.shift(str, shiftSteps), "nsegalera", "Wrong result - " + lib.shift(str, shiftSteps));
  done();
};

// Assert that the shifted function returns the same input string when given a zero value as number of shifts
unit["lib.shift(strLen) - Returns the same input string, when given a zero value"] = (done) => {
  const str = "eransegal";
  const shiftSteps = 0;
  assert.ok(typeof(str) == 'string');
  assert.ok(typeof(shiftSteps) == 'number');
  assert.equal(lib.shift(str, shiftSteps), "eransegal", "Wrong result - " + lib.shift(str, shiftSteps));
  done();
};

// Assert that the sorted function returns a new sorted string in ascending order
unit["lib.sort(str) - Returns a new sorted string in ascending order"] = (done) => {
  const str = "eransegal";
  assert.ok(typeof(str) == 'string');
  assert.equal(lib.sort(str), "aaeeglnrs", "Wrong result - " + lib.sort(str));
  done();
};

module.exports = unit;
