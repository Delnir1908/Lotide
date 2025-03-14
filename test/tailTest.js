const tail = require("../tail");
const assert = require("chai").assert;
/*
const assertEqual = require("../assertEqual");
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/
describe("#tail", () => {

  it(`returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns ['5'] for [5, '5']", () => {
    assert.deepEqual(tail([5, '5']), ['5']); 
  });

  it("make sure the original array was not altered by the tail function", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(words.length, 3);
  });
  
});