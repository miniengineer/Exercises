//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?

//E.g.:
// Input : abcd10jk
// Output : true

// Input : hutg9mnd!nk9
// Output : false

//eslint-disable-next-line no-unused-vars
const isUnique = (str) => {
  let letter= {};
  let result = true;
  const arr = str.split("");
  arr.forEach((character) => {
    if (!letter[character]) {
      letter[character] = character;
    } else {
      result = false;
      return;
    }
  });
  return result;
};

