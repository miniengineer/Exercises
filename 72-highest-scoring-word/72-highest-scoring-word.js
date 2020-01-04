//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const findHighestScore = (obj) => {
  let result = { count: 0, word: "" };
  for (let [key, value] of Object.entries(obj)) {
    if (result.count < value) {
      result.count = value;
      result.word = key;
    }
  }
  return result;
};


//eslint-disable-next-line no-unused-vars
const high = (string) => {
  const count = string.split(" ").reduce((acc, word) => {
    acc[word] = 0;
    let newWord = word.split("");
    newWord.forEach(letter => {
      acc[word] += alphabet.indexOf(letter) + 1;
    });
    return acc;
  }, {});
  return findHighestScore(count).word;
};
