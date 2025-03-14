/*
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
*/


const countOnly = function(allItems, itemsToCount) {

  let countOnly = {};

  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      let i = 0;
      for (let index of allItems) {
        if (index === item) {
          i++;
        }
      }
      countOnly[item] = i;
      if (i === 0) {
        delete countOnly[item];
      }
    }
  }

  return countOnly;

};

module.exports = countOnly;

/*
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/