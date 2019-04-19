// Mumbling.
//
// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
//
// link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(string) {
  string = string.split("");
  let result = string.reduce((accumulator,currentElement,i) => {
    let accumLetter = currentElement.padEnd(i, currentElement);
    accumLetter = accumLetter[0].toUpperCase() + accumLetter;
    accumulator.push(accumLetter);
    return accumulator;
  }, []).join("-");
  return result;
}


accum("abcd");
