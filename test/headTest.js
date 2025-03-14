//const assertEqual = require("../assertEqual");
const assert = require('chai').assert;
const head = require("../head");

//assertEqual((head([2, 4 ,6 ,8])), 2);
//assertEqual((head(['apple', 'orange', 'strawberry', 'banana'])), 'apple');
describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });


});
