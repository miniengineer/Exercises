// мне дан текст на английском
// мне нужно найти длину самого длинного слова в этом тексте
//функция которая получает один аргумент - стринг
//она возвращает тебе номер - количество букв в самом длинном слове


//divides str into words

function giveLongestWord(str) {
  var currentPosition = 0;
  var spacePosition = 0;
  var maxSoFar = 0;
  var currentWordLength = 0;
  str += " ";
  while(currentPosition < str.length) {
    if(str[currentPosition] === " ") {
      currentWordLength = currentPosition - spacePosition - 1;
      spacePosition = currentPosition;
      if(maxSoFar < currentWordLength) {
        maxSoFar = currentWordLength;
      }
    }
    currentPosition++;
  }
  return maxSoFar;
}


giveLongestWord("I love cookies");
