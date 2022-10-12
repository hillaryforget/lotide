//MIDDLE
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let evenArr = array.length % 2 === 0;
  if (!evenArr) {
    return [array[Math.floor(array.length / 2)]];
  }
  const middleElement = (array.length / 2);
  return [array[middleElement - 1], array[middleElement]];
};

module.exports = middle;