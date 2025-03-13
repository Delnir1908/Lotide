const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, '2', 3]);
assertArraysEqual([1, 'apple', 3], [1, 'apple', 3]);
assertArraysEqual(['red', 'blue', 'yellow'], ['yellow', 'blue', 'red']);