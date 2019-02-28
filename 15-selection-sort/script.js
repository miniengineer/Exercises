//Write Selection sort algorithm

function swap(array,a,b,c) {
  var memo = array[b];
  array[b] = a;
  array[c] = memo;
  return array;
}

function selectionSort(array) {
  var circleNumber = 0;
  while(circleNumber < array.length) {
    var i = circleNumber;
    var minForNow = 100;
    var index = 0;
    for(circleNumber; i < array.length; i++) {
      if(array[i] < minForNow) {
        index = i;
        minForNow = array[i];
      }
    }
    swap(array,minForNow,circleNumber,index);
    circleNumber++;
  }
  return array;
}

selectionSort([6,4,3,8,1]);
