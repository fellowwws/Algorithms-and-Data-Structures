/**
 * @param {number[]} haystack
 * @param {number} needle
 * @returns {(number|undefined)}
 */
function binarySearch(haystack, needle) {
  let min = 0;
  let max = haystack.length - 1;

  while (min <= max) {
    let guess = Math.floor((min + max) / 2);

    if (haystack[guess] === needle) return haystack[guess];

    if (haystack[guess] < needle) min = guess + 1;
    if (haystack[guess] > needle) max = guess - 1;
  }
}

var array = [];
for (let i = 0; i <= 10000; i++) {
  array[i] = i;
}

console.time();
binarySearch(array, 8653);
console.timeEnd();
// 0.092041015625ms
