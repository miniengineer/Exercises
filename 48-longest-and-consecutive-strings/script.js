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
  //copy and sort the array
  var sameArray = [...strarr];
  sameArray.sort(function compare(a,b) {
    return a.length < b.length;
  });
  //get the index of the longest number
  var longestWordIndex = strarr.indexOf(sameArray[0]);
  //return result without changing the argument
  let result = strarr.slice(longestWordIndex,longestWordIndex + k).join("");
  return result;
}

longestConsec(["zone", "abigail", "theta", "form", "minirathegreatest", "zas", "theta", "abigail"], 4);
