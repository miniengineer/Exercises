//Write sorting algorithm
// array = [4,3,2,1]
//minForNow 3, 2,
//
//two functions
// greedy algorithm
//swap

function swap(array,a,b,c) {
  var index = array.indexOf(a);
  memo = array[b];
  array[b] = a;
  array[index] = memo;
  return array;
}

function selectionSort(array) {
  var circleNumber = 0;
  while(circleNumber < array.length) {
    var i = circleNumber;
    var minForNow = 100;
    for(circleNumber; i < array.length; i++) {
      if(array[i] < minForNow) {
        minForNow = array[i];
      }
    }
    swap(array,minForNow,circleNumber,i);
    circleNumber++;
  }
  return array;
}
