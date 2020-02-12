/**
 * @param {number[]} array
 * @returns {number[]}
 */
function mergeSort(array) {
  if (array.length < 2) return array;

  const halfWayPoint = Math.floor(array.length / 2);
  const left = array.slice(0, halfWayPoint);
  const right = array.slice(halfWayPoint);

  return merge(mergeSort(left), mergeSort(right));
}
/**
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number[]}
 */
function merge(left, right) {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      output.push(left[leftIndex]);
      leftIndex++;
    }
    if (left[leftIndex] > right[rightIndex]) {
      output.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return output.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
