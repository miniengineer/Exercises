function wordFreq(string) {
  var ignoreWords = ["and", "to"];
  string = string.replace(/[.,?!'":;...-]/gi, "").replace(/\s+/g, " ");
  var arrayOfWords = string.toLowerCase().split(" ");
  var result = {};

  for (var i = 0; i < arrayOfWords.length; i++) {
    const currentWord = arrayOfWords[i];
    if (ignoreWords.includes(currentWord)) {
      continue;
    }

    if (result[currentWord] == null) {
      result[currentWord] = 1;
    } else {
      result[currentWord]++;
    }
  }

  return result;
}


console.log(wordFreq("hello    my    name     is Minira!!!! I love cookies. And I Love to eat udon. Because I am minira!!!!!!!!!"));
