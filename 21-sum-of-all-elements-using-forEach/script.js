//get sum of all elements in array using forEach

function getSum(array) {
  var result = 0;
  array.forEach(function(element) {
    result += element;
  });
  return result;
}

getSum([1,2,3,4]);
