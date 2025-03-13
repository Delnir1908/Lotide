// FUNCTION IMPLEMENTATION
const tail = function(array) {
  let newArr = [];
  if (array.length <= 1) {
    return newArr;
  } else {
    for (let i = 1; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
};

module.exports = tail;