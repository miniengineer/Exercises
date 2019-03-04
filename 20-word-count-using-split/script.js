// мне дан текст на английском
// мне нужно найти длину самого длинного слова в этом тексте

function getLongestWord(string) {
  var words = string.split(" ");
  var maxSoFar = -Infinity;
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > maxSoFar) {
      maxSoFar = words[i].length;
    }
  }
  return maxSoFar;
}

getLongestWord("I love cookies");
