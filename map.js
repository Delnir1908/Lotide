// // FUNCTION IMPLEMENTATION
// const eqArrays = function(arr1, arr2) {

//   if (arr1.length !== arr2.length) {
//     return false;
//   } 
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;

// };

// const assertArraysEqual = function(actual, expected) {

//   if (eqArrays(actual, expected)) {
//     console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
//   }
  
// };

// const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// console.log(map(words, (word) => word[0]));

// // FUNCTION IMPLEMENTATION


// const fruits = ['apple', 'banana', 'cherry', 'date']
// assertArraysEqual(map(fruits, (word) => word.length), [5, 6, 6, 4]);
// assertArraysEqual(map(fruits, (word) => word.slice(1,3)), ['pp', 'an', 'he', 'at']);
// assertArraysEqual(map(fruits, (word) => word.toUpperCase()), ['APPLE', 'BANANA', 'CHERRY', 'DATE']);
