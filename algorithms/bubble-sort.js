function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// basic implementation
function bubbleSortBasic(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for (var i = 0; i < array.length; i++) {
    countOuter++;
    for (var j = 1; j < array.length; j++) {
      countInner++;
      if (array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }
}
// optimized
function bubbleSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  var swapped;
  do {
    countOuter++;
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      countInner++;
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}
