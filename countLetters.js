// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const countLetters = function(string) {

  let output = {};

  for(const letter of string) {
    if (/^[A-Za-z]$/.test(letter)) {     //check if letter is aphabetic
      if (!Number.isInteger(output[letter])) {           //if value is undefined or 
      output[letter] = 1;
      } else {
        output[letter] += 1;
      }
    }
  }

  return output;

};

console.log(countLetters('today is a good day'));
assertEqual(countLetters('today is a good day')['o'], 3);
assertEqual(countLetters('today is a good day')['i'], 1);
assertEqual(countLetters('today is a good day')['a'], 3);
assertEqual(countLetters('today is a good day')['a'], 2);