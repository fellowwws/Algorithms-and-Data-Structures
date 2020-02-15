/**
 * @param {number[]} array
 * @returns {number[]}
 */
function bubbleSort(array) {
  if (array.length < 2) return array;

  do {
    sorting = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i);
        sorting = true;
      }
    }
  } while (sorting);

  return array;
}

function swap(array, i) {
  const temp = array[i];
  array[i] = array[i + 1];
  array[i + 1] = temp;
}
var array = [4, 5, 1, 7, 3, 2, 9, 8, 6];
