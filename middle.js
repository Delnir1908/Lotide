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

const middle = function(array) {

  let newArr = [];
  let l = array.length;

  if (l <= 2) {
    return newArr;
  }

  if (l % 2 === 0) {
    newArr.push(array[l / 2 - 1]);
    newArr.push(array[l / 2]);
  } else {
    newArr.push(array[Math.floor(l / 2)]);
  }
  return newArr;

};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(['Lighthouse', 'Labs', 'Coding', 'Finance', 'Chemistry']), ['Coding']);
assertArraysEqual(middle([10, 89, '6', 23]), [89, '6']);
assertArraysEqual(middle([1, 10]), []);
assertArraysEqual(middle([1]), []);



