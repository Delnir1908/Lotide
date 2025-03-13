const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(['Lighthouse', 'Labs', 'Coding', 'Finance', 'Chemistry']), ['Coding']);
assertArraysEqual(middle([10, 89, '6', 23]), [89, '6']);
assertArraysEqual(middle([1, 10]), []);
assertArraysEqual(middle([1]), []);
