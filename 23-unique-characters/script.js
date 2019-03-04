//write js function that checks whether a string consists of only unique characters

function isUnique(word) {
  var letterCount = {};
  var result = true;
  word.split("").forEach(function(letter) {
    if(letterCount[letter] == null) {
      letterCount[letter] = 1;
    } else {
      result = false;
    }
  });
  return result;
}

console.log(isUnique("minira"));
