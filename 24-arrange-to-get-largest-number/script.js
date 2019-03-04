// Your task is to make a function that can take any non-negative integer as a argument and return it
// with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 21445 Output: 54421
//
// Input: 145263 Output: 654321
// 123456
// Input: 1254859723 Output: 9875543221

function makeLargest(number) {
  var str = number.toString();
  str = str.split("").sort();
  var array = [];
  for(var i = 0; i < str.length; i++) {
    array.unshift(str[i]);
  }
  array = array.join("");
  return array;
}

makeLargest(35830983);
