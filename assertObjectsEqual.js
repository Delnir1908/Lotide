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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let key1Array = Object.keys(object1);
  let key2Array = Object.keys(object2);

  if ((key1Array.length !== key2Array.length)) {
    return false;
  }

  for (const key of key1Array) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;

};
*/

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {

  const inspect = require("util").inspect; 

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

module.exports = assertObjectsEqual;


/*

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject) // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

const car1 = { make: "tesla", type: "sedan" };
const car2 = { type: "sedan", make: "tesla" };
const car3 = {awd: true, type: "sedan", make: "tesla"};
const car4 = { make: "tesla", color: "sedan" };
assertObjectsEqual(car1, car2);
assertObjectsEqual(car2, car3);
assertObjectsEqual(car1, car4);

*/