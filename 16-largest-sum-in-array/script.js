// Write a javascript program that finds a pair of elements in an array that produce the largest sum.
// for example
// For an array of `[4,1,3,8,5,2,9,6]`, the largest sum will be 8 + 9 = 17
// Another example: `[5,1,3,7]`. The largest sum is 5 + 7 = 12
// All elements in the array are integers. You can assume that array has at least two elements.

// Implementation 1

//  function getArrayMaxSum(array) {
//   var memo = 0;
//   var maxForNow = 0;
//   var maxSum = 0;
//   var circle = 0;
//   while(circle < 2) {
//     for(var i = 0; i < array.length; i++) {
//       if(maxForNow < array[i]) {
//         maxForNow = array[i];
//         memo = i;
//       }
//     }
//     maxSum += maxForNow;
//     maxForNow = 0;
//     array[memo] = 0;
//     circle++;
//   }
//   return maxSum;
// }


//Implementation 2


function swap(array,a,b,c) {
  var memo = array[b];
  array[b] = a;
  array[c] = memo;
  return array;
}


function getArrayMaxSum(array) {
  var circleNumber = 0;
  while(circleNumber < 2) {
    var i = circleNumber;
    var maxForNow = 0;
    var index = 0;
    for(circleNumber; i < array.length; i++) {
      if(maxForNow < array[i]) {
        index = i;
        maxForNow = array[i];
      }
    }
    swap(array,maxForNow,circleNumber,index);
    circleNumber++;
  }
  var sum = array[0] + array[1];
  return sum;
}
