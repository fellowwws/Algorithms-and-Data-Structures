/**
 * @param {number[]} array
 * @returns {number[]}
 */
function quickSort(array) {
  if (array.length <= 1) return array;

  const left = [];
  const right = [];
  const pivot = array[array.length - 1];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    if (array[i] > pivot) right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
