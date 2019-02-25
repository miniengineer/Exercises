function isEven(array) {
  debugger;
  if (array.length === 0) {
    return false
  }
  for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 > 0) {
     return false;
    }
  }
  return true;
}
