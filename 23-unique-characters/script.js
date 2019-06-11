//write js function that checks whether a string consists of only unique characters

function isUnique(word) {
  if (word.length === 0 || typeof word === "number") {
    return "Please enter a word";
  }
  var letterCount = {};
  var result = true;
  word.split("").forEach(letter => {
    if(letterCount[letter] == null) {
      letterCount[letter] = 1;
    } else {
      result = false;
    }
  });
  return result;
}

isUnique("blue");



//export function declaration as a key of module.exports object
module.exports.isUnique = isUnique;
