//Write Selection sort algorithm

function swap(array,index1,index2) {
 var memo = array[index1];
 array[index1] = array[index2];
 array[index2] = memo;
 return array;
}

function selectionSort(array) {
  for(var circleNumber = 0; circleNumber < array.length; circleNumber++) {
    var i = circleNumber;
    var minForNow = 100;
    var index = 0;
    for(circleNumber; i < array.length; i++) {
      if(array[i] < minForNow) {
        index = i;
        minForNow = array[i];
      }
    }
    swap(array,circleNumber,index);
  }
  return array;
}

selectionSort([4,3,1,2]);
