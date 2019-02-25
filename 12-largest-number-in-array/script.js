function largestNumber(array) {
  var i = 0;
  var maxForNow = 0;
  while(i < array.length) {
    if(maxForNow < array[i]) {
      maxForNow = array[i];
    }
    i++;
  }
  return maxForNow;
}
