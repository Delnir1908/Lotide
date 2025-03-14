//const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require("chai").assert;
/*
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(['Lighthouse', 'Labs', 'Coding', 'Finance', 'Chemistry']), ['Coding']);
assertArraysEqual(middle([10, 89, '6', 23]), [89, '6']);
assertArraysEqual(middle([1, 10]), []);
assertArraysEqual(middle([1]), []);
*/
describe("#middle", () => {
 
  it(`returns [2, 3] for [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['Coding'] for ['Lighthouse', 'Labs', 'Coding', 'Finance', 'Chemistry']", () => {
    assert.deepEqual(middle(['Lighthouse', 'Labs', 'Coding', 'Finance', 'Chemistry']), ['Coding']); 
  });
 
  it(`returns [89, '6'] for [10, 89, '6', 23]`, () => {
    assert.deepEqual(middle([10, 89, '6', 23]), [89, '6']);
  });
 
  it(`returns [] for [1,10]`, () => {
    assert.deepEqual(middle([1, 10]), []);
  });
 
  it(`returns [] for [1]`, () => {
    assert.deepEqual(middle([1]), []);
  });

  it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = middle(words);
    assert.deepEqual(result, ["world"]);
    assert.strictEqual(words.length, 3);
  });

 
});

