const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
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

};



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

const car1 = { make: "tesla", type: "sedan" };
const car2 = { type: "sedan", make: "tesla" };
const car3 = {awd: true, type: "sedan", make: "tesla"};
const car4 = { make: "tesla", color: "sedan" };
assertEqual(eqObjects(car1, car2), true); // => true
assertEqual(eqObjects(car2, car3), false); // => false
assertEqual(eqObjects(car1, car4), false); // => false