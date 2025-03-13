const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual((head([2, 4 ,6 ,8])), 2);
assertEqual((head(['apple', 'orange', 'strawberry', 'banana'])), 'apple');