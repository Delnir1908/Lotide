// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;

};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
  
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (const letter of sentence) {

    if (/^[A-Za-z]$/.test(letter)) {
      results[letter] = [];
      for (const index in sentence) {
        if (letter === sentence[index] && !results[letter].includes(Number(index))) {
          results[letter].push(Number(index));
        }
      }
    }
  }

  return results;
  
};

let positions = letterPositions('hello world');
console.log(positions);
assertArraysEqual(positions['h'],[0]);
assertArraysEqual(positions['o'],[4,7]);