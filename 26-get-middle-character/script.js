// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even,
// return the middle 2 characters.
//
// #Examples:
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"
//
// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more
// than 1000 in some test cases due to an error in the test cases). You do not need to test for this.
// This is only here to tell you that you do not need to worry about your solution timing out.
//
// #Output
//
// The middle character(s) of the word represented as a string.

function isEven(word) {
  if (word.length % 2 !== 0) {
    return "odd";
  } else {
    return "even";
  }
}

function getMiddle(string) {
  var index = 0;
  var result = [];
  var array = [];
  if(isEven(string) === "odd") {
    array = string.split("");
    index = array.length / 2 - 0.5;
    result =  array.splice(index,1);
    result = result.join("");
    return result;
  } else if (isEven(string) === "even") {
    array = string.split("");
    index = array.length / 2 - 1;
    result = array.splice(index,2);
    result = result.join("");
    return result;
  } else {
    return string;
  }
}

getMiddle("Minira");
