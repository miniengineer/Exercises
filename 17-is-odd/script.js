//right a js function that checks if all numbers in array are odd

function isOdd(array) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      return false;
    }
  }
  return true;
}

isOdd([1,3,4,5]);
