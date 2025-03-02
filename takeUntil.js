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




const takeUntil = function(array, callback) {
  // ...
  let results = [];

  for(let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  
  return results;

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x > 6), [1, 2, 5]);

const data2 = ['apple', 'orange', 'banana', 'strawberry'];
assertArraysEqual(takeUntil(data2, item => item.length > 8), ['apple', 'orange', 'banana']);
















