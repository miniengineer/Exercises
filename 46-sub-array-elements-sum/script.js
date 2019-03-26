// Given an array (or list or vector) of arrays (or, guess what, lists or vectors) of integers,
// your goal is to return the sum of a specific set of numbers, starting with elements whose position
// is equal to the main array length and going down by one at each step.
//
// Say for example the parent array (etc, etc) has 3 sub-arrays inside: you should consider
// the third element of the first sub-array, the second of the second array and the first element
// in the third one: [[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]
// would have you considering 1 for [3, 2, 1, 0], 6 for [4, 6, 5, 3, 2]
// and 9 for [9, 8, 7, 4], which sums up to 16.


function sumOfSubElements(arr) {
  var i = arr.length+1;
  var sum = arr.reduce(function(a,b) {
    i--;
    return a += b[i];
  }, 0);
  return sum;
}

sumOfSubElements([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]);
