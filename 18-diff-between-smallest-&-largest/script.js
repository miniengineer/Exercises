//find difference between smallest and the largest number in array

function getMaxNumber(array) {
  var maxForNow = -Infinity;
  for(var i = 0; i < array.length; i++) {
    if(array[i] > maxForNow) {
      maxForNow = array[i];
    }
  }
  return maxForNow;
}

function getMinNumber(array) {
  var minForNow = Infinity;
  for(var i = 0; i < array.length; i++) {
    if(array[i] < minForNow) {
      minForNow = array[i];
    }
  }
  return minForNow;
}

function difference(array) {
  var result = getMaxNumber(array) - getMinNumber(array);
  return result;
}

difference([1,4,12,8,9]);
