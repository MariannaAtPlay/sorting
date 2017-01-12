function bubbleSort(array) {
  var arrCopy = array.slice(),
    swapCount = 0;

  do {
    swapCount = 0;
    for (var i = 0; i < arrCopy.length; i++) {
      if (greaterThan(arrCopy[i], arrCopy[i+1])) {
        swap(arrCopy, i, i+1);
        swapCount++;
      }
    }
  } while (swapCount > 0)

  return arrCopy;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function greaterThan(a, b) {
  return a > b;
}

