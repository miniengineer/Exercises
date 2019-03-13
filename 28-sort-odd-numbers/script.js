// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it.
// If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
//
// sortArray([2, 3, 2, 8, 1, 4])

function sortArray(array) {
  if (array === []) {
    return array;
  }
  var arrayOdd = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 > 0 && array[i] !== 0) {
      arrayOdd.push(array[i]);
    }
  }
  arrayOdd.sort((a,b) => a > b);
  for (var a = 0; a < array.length; a++) {
    if (array[a] % 2 > 0 && array[i] !== 0) {
      array[a] = arrayOdd.shift();
    }
  }
  return array;
}

sortArray([2, 13, 2, 8, 3, 4]);
