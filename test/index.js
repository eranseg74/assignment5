/*
 * Test Runner
 *
 */

 const util = require('util');
 const debug = util.debuglog('test');

// Application logic for the test Runner
_lib = {};

// Container for the test
_lib.tests = {};

// Add on the unit tests
_lib.tests.unit = require('./unit');

// Count all the tests
_lib.countTests = () => {
  let counter = 0;
  for(let key in _lib.tests) {
    if(_lib.tests.hasOwnProperty(key)) {
      const subTests = _lib.tests[key];
      for(let testName in subTests) {
        if(subTests.hasOwnProperty(testName)) {
          counter++;
        }
      }
    }
  }
  return counter;
};

// Run all the tests, collecting the errors and successes
_lib.runTests = () => {
  const errors = [];
  let successes = 0;
  const limit = _lib.countTests();
  let counter = 0;
  for(let key in _lib.tests) {
    if(_lib.tests.hasOwnProperty(key)) {
      const subTests = _lib.tests[key];
      for(let testName in subTests) {
        if(subTests.hasOwnProperty(testName)) {
          (() => {
            const tmpTestName = testName;
            const testValue = subTests[testName];
            // Call the test
            try {
              testValue(() => {
                // If it calls back without throwing, then it succeeded, so log it in green
                console.log('\x1b[32m%s\x1b[0m',tmpTestName);
                counter++;
                successes++;
                if(counter == limit) {
                  _lib.produceTestReport(limit, successes, errors);
                }
              });
            } catch(e) {
              // If it throws, then it failed, so capture the error thrown and log it in red
              errors.push({
                'name' : testName,
                'error' : e
              });
              console.log('\x1b[31m%s\x1b[0m',tmpTestName);
              counter++;
              if(counter == limit) {
                _lib.produceTestReport(limit, successes, errors);
              }
            }
          })();
        }
      }
    }
  }
};

// Produce a test outcome report
_lib.produceTestReport = (limit, successes, errors) => {
  console.log("");
  console.log("--------------BEGIN TEST REPORT---------------");
  console.log("");
  console.log("Total tests: ", limit);
  console.log("Pass: ", successes);
  console.log("Fail: ", errors.length);
  console.log("");

  // If there are errors, print them in detail
  if(errors.length > 0) {
    console.log("--------------BEGIN ERROR DETAILS---------------");
    console.log("");
    errors.forEach((testError) => {
      console.log('\x1b[31m%s\x1b[0m',testError.name);
      console.log(testError.error);
      console.log("");
    });
    console.log("");
    console.log("--------------END ERROR DETAILS---------------");
  }
  console.log("");
  console.log("--------------BEGIN TEST REPORT---------------");
  process.exit(0);
};

// Run the test
_lib.runTests();
