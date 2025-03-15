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


const flatten = function(array) {

  let newArr = [];
  
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArr.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    }
  }

  return newArr;

};

module.exports = flatten;

// let testArray1 = [1, 2, [3, 4], 5];
// let origninalArray1 = testArray1;
// assertArraysEqual(flatten(testArray1), [1, 2, 3, 4, 5]);
// assertArraysEqual(testArray1, origninalArray1);


// let testArray2 = ['Banana', 'Pineapple', 'Orange', ['Strawberry', 'BlackBerry', 'Cranberry'], 'peach'];
// let origninalArray2 = testArray2;
// assertArraysEqual(flatten(testArray2), ['Banana', 'Pineapple', 'Orange', 'Strawberry', 'BlackBerry', 'Cranberry', 'peach']);
// assertArraysEqual(testArray2, origninalArray2);

// let testArray3 = [1, 2, [3, 4], 5];
// let origninalArray3 = testArray3;
// assertArraysEqual(flatten(testArray3), [1, 2, '3', 4, 5]);
// assertArraysEqual(testArray3, origninalArray3);