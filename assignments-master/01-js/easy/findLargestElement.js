/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let biggest = numbers[i];
  for (let i = 0; i < numbers.length; i++) {
      let bigg = numbers[i] > numbers[i + 1];
      biggest=numbers[i]
  }
  return biggest;
}

module.exports = findLargestElement;
