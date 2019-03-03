// мне дан текст на английском
// мне нужно найти длину самого длинного слова в этом тексте
//функция которая получает один аргумент - стринг
//она возвращает тебе номер - количество букв в самом длинном слове

//divides str into words

function giveLongestWord(str) {
  var spacePosition = 0;
  var maxSoFar = 0;
  var currentWordLength = 0;
  str += " ";
  for(var i = 0; i < str.length; i++) {
    if(str[i] === " ") {
      currentWordLength = i - spacePosition - 1;
      spacePosition = i;
      if(maxSoFar < currentWordLength) {
        maxSoFar = currentWordLength;
      }
    }
  }
  return maxSoFar;
}


giveLongestWord("I love cookies");
