function largestNumber(array) {
  var maxForNow = 0;
  for(var i = 0; i < array.length; i++) {
    if(maxForNow < array[i]) {
      maxForNow = array[i];
    }
  }
  return maxForNow;
}

largestNumber([3,6,1,2,9,11]);
