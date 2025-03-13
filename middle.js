// FUNCTION IMPLEMENTATION

const middle = function(array) {

  let newArr = [];
  let l = array.length;

  if (l <= 2) {
    return newArr;
  }

  if (l % 2 === 0) {
    newArr.push(array[l / 2 - 1]);
    newArr.push(array[l / 2]);
  } else {
    newArr.push(array[Math.floor(l / 2)]);
  }
  return newArr;

};

module.exports = middle;


