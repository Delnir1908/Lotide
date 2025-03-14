/*
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
*/

const without = function(source, itemsToRemove) {
  
  let newArray = [];
  
  for (let i = 0; i < source.length; i++) {
    let shouldAdd = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldAdd = false;
        break;
      }
    }
    if (shouldAdd) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;

/*
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without(['Lighthouse', 'Labs', 'Coding', 'Finance', 'Chemistry'], ['Chemistry', 'Finance', 'Physics']), ['Lighthouse', 'Labs', 'Coding']);
assertArraysEqual(without([10, 89, '6', 23], ['6', '23']), [10, 89, 23]);
*/