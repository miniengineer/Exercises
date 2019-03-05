// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it.
// If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// sortArray([2, 3, 2, 8, 1, 4])

function swap(array,index1,index2) {
  var memo = array[index1];
  array[index1] = array[index2];
  array[index2] = memo;
  return array;
}

function sortOdd(array) {
  var minNum = Infinity;
  var circleNum = 1;
  var i = circleNum;
  var index = 0;
  while(circleNum !== 0) {
    circleNum = 0;
    for(circleNum; i < array.length; i++) {
      if(array[i] % 2 !== 0 && array[i] < minNum) {
        minNum = array[i];
        index = i;
        swap(array,index,circleNum);
      }
      circleNum++;
    }
  }
  return array;
}
