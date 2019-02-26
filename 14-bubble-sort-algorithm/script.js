//Write sorting algorithm

function bubbleSort(array) {
  var counter = 1;
  var keepForNow = 0;
  while(counter > 0) {
    for(var i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        keepForNow = array[1];
        array[i] = array[i+1];
        array[i+1] = keepForNow;
        counter++;
      }
    } counter = 0;
  }
  return array;
}
