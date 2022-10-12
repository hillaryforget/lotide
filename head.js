//HEAD
const head = function(array) {
  if (array !== null && array.length) {
    return array[0];
  } else {
    return undefined;
  }
};

module.exports = head;