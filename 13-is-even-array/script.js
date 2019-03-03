function isEven(array) {
  if (array.length === 0) {
    return false;
  }
  for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 > 0) {
      return false;
    }
  }
  return true;
}

isEven(2,6,10,12,4);
