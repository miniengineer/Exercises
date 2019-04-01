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
  var l = strarr.length;
  if(l === 0 || k > l || k <= 0) {
    return "";
  }
  //sort the array
  var memo = [...strarr];
  strarr.sort(function compare(a,b) {
    return a.length < b.length;
  });
  return `${strarr[0]}`;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "alexsander", "zas", "theta", "abigail"], 4));
