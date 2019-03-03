//You are given text in English. Write a JavaScript function that accepts text as an argument, and returns the number of word in this text.

function wordCount(text) {
  var count = 1;
  for(var i= 0; i < text.length; i++) {
    if(text[i] === " ") {
      count++;
    }
  }
  return count;
}

document.write(wordCount("My husband is the best"));
