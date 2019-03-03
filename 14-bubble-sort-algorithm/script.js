function swap(array,index1,index2) {
  var memo = array[index1];
  array[index1] = array[index2];
  array[index2] = memo;
  return array;
}

function bubbleSort(array) {
  while(true) { // eslint-disable-line
    var circle = 0;
    for(var i = 0; i < array.length; i++) {
      if(array[i] > array[i+1]) {
        swap(array,i,i+1);
        circle++;
      }
    }
    if(circle === 0) {
      return array;
    }
  }
}

bubbleSort([5,12,1,9,12,67]);
