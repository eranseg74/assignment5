/*
 * Simple functions for testing purpose
 *
 */

// Container for the functions
const lib = {};

// Factorial - returns the factorial of a given number. If the value is 0 then the result is 0. If the value is nugative or not a number then -1 is returned
lib.factorial = (input) => {
  if(typeof(input) == 'number'){
    if(input == 0) {
      return 0;
    } else {
      let res = 1;
      for(let i = 1; i < input; i++) {
        res *= i;
      }
      return res;
    }
  } else {
    return -1;
  }
};

// Palindrome - Checks if a given number or string is a palindrome. If the string / number is a palindrome then 'true' is return, otherwise the function returns 'false'
lib.palindrome = (input) => {
 if(typeof(input) == 'string' || typeof(input) == 'number') {
   const str = typeof(input) == 'number' ? input.toString() : input;
   let i = 0;
   const len = str.length;
   while(str.charAt(i) == str.charAt(len - i)) {
     i++
     if(i == len - i || i + 1 == len - i) {
       return true;
     }
   }
 }
 return false;
};

// RandomString - Gets a number representing the length of a string and generates a random string using only letters [a-z, A-Z] and numbers [0-9]. if the given input is not a number or its value is not greater then 0 then a false is returned. otherwise, the string itself is returned.
lib.randomString = (strLen) => {
  let str = typeof(strLen == 'number') && strLen > 0 ? '' : false;
  if(str) {
    const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    while(strLen > 0) {
      str += availableCharacters.indexOf(Math.floor(Math.random()*availableCharacters.length));
    }
  }
  return str;
};

// Shifted - Gets a string and a number as inputs and shifts the string according to the given number. positive number will shift the string to the right, negative number will shift the string to the left, and zero will return the string with no changes. On invalid inputs a false is returned.
lib.shifted = (str, shiftLen) => {
  let shiftedStr = typeof(str) == 'string' && typeof(shiftLen) == 'number' ? str : false;
  if(shiftLen < 0) {
    shiftedStr = str.slice(shiftLen, str.length-1) + str.slice(0, shiftLen-1);
  }
  if(shiftLen > 0) {
    shiftedStr = str.slice(str.length-shiftLen, str.length-1) + str.slice(0, shiftLen-shiftLen-1);
  }
  return shiftedStr;
};

// Sorted - Gets a string as an input and returns a new string with characters sorted in an ascending order. the string must contain at least one character
lib.sorted = (str) => {
  str = typeof(str) == 'string' && str.length > 0 ? str : false;
  if(str) {
    let index = 0;
    for(let i = 1; i < str.length; i++) {
      let j = i;
      while(str.charAt(j) < str.charAt(j-1) && j > 0) {
        const tmp = str.charAt(j-1);
        str.charAt(j-1) = str.charAt(j);
        str.charAt(j) == tmp;
        j--;
      }
    }
  }
  return str;
};

// Export the module
module.exports = lib;
