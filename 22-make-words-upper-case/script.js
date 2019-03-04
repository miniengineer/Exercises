// change first letter in each word of a sentence to a CAPITAL letter

function makeCapitalLetter(string) {
  var words = string.split(" ").map(function(element) {
    var letters = element.split("");
    letters[0] = letters[0].toUpperCase();
    element = letters.join("");
    return element;
  }).join(" ");
  return words;
}

makeCapitalLetter("I love cookies");
