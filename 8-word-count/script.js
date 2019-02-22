//You are given text in English. Write a JavaScript function that accepts text as an argument, and returns the number of word in this text.

function wordCount(text) {
  var currentPosition = 0;
  var count = 1;
  while(currentPosition < text.length) {
    if(text[currentPosition] === " ") {
      count++;
    }
    currentPosition++;
  }
  return count;
}

document.write(wordCount("My husband is the best"));
