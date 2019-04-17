// You are given a function that must insert an asterisk between every pair of even digits in an integer n,
// that should be converted to a string(toString), received as parameter and return it.
//
// n can be a string/an array containing integers only.
//
// If n is an array, put the elements together then put the asterisk, treating them as a string.
// e.g. [1, 2, 4, 8, 16] ==> "12*4*816"
//
// Here we will consider all the numbers that n % 2 == 0 as even numbers.
//
// Have fun!

function asteriskIt(numbers) {
  if (typeof numbers === 'string') {
    numbers = numbers.split('');
  }
  numbers.forEach(function (currentElement, currentIndex) {
    if (currentElement % 2 === 0 && numbers[currentIndex + 1] % 2 === 0) {
      numbers.splice(currentIndex + 1,0,'*');
    }
  });
  numbers = numbers.join("");
  return numbers;
}


(asteriskIt([1, 2, 4, 8, 16, 4]);
