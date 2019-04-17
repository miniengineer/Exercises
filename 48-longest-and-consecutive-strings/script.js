// Consecutive strings
//
// You are given an array strarr of strings and an integer k.
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
//
// Note
// consecutive strings : follow one after another without an interruption


function longestConsec(strarr, k) {
  //edge cases
  if(strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  }
  //find the longestWord and its index
  var longestWord = "";
  var longestWordIndex = null;
  strarr.forEach((currentElement,currentIndex) => {
    if(currentElement.length > longestWord.length) {
      longestWord = currentElement;
      longestWordIndex = currentIndex;
    }
  });
  //find the longtest and join with k consecutive elements
  let result = strarr.slice(longestWordIndex,longestWordIndex + k).join("");
  return result;
}

longestConsec(["alanrickman", "miniraSamadova", "a", "ab", "acc"], 3);
