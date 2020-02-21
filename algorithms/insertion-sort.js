/**
 * @param {number[]} array
 * @returns {number[]}
 */
function insertionSort(array) {
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const spliced = array.splice(i, 1)[0];
        array.splice(j, 0, spliced);
      }
    }
  }
}
