/**
 * @param {number[]} haystack
 * @param {number} needle
 * @returns {(number|undefined)}
 */
function linearSearch(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    const el = haystack[i];
    if (el === needle) return el;
  }
}

var array = [];
for (let i = 0; i <= 10000; i++) {
  array[i] = i;
}

console.time();
linearSearch(array, 8653);
console.timeEnd();
// 0.402099609375ms
