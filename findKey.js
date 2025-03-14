// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

};

module.exports = findKey;
// assertEqual(findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// ), 'noma');

// assertEqual(findKey(
//   {
//     'toyota': { country: 'japan' },
//     'volswagon': { country: 'germany' },
//     'ford': { country: 'usa' },
//     'subaru': { country: 'japan' },
//     'rolls-royce': { country: 'uk' },
//     'ferrari': { country: 'italy' },
//   },
//   (x) => x.country === 'italy'
// ), 'ferrari');