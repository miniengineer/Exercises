// #Find the missing letter
//
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//
// You will always get an valid array. And it will be always exactly one letter be missing.
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.
//
// Example:
//
// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)
//


function isMatch(array) {
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  if (array[0] === array[0].toUpperCase()) {
    alphabet = alphabet.toUpperCase;
  }
  var i = alphabet.indexOf(array[0]);
  var index = 0;
  for (i; index < array.length; i++) {
    if (alphabet[i] !== array[index]) {
      return array[index];
    }
    index++;
  }
}

console.log(isMatch(["A","B","C","D","F"]));
