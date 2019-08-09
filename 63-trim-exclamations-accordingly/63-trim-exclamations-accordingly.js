// Description:
// Remove some exclamation marks to keep the same number of exclamation marks
// at the beginning and end of each word. Words are separated by spaces in the sentence.
// Please note: only can remove, can not append.
//
// Examples
// remove("Hi!") === "Hi"
// remove("!Hi! Hi!") === "!Hi! Hi"
// remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
// remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
// Note
// Please don't post issue about difficulty or duplicate.



function remove(string) {
  let words = string.split(" ");
  return words.map((word) => {
    //find number of exclams before and after
    let start = word.match(/^[!]*/);
    let end = word.match(/[!]*$/);
    //get rid of them accordingly
    if (start[0].length > end[0].length) {
      word = word.slice(start[0].length - end[0].length);
    } else if (start[0].length < end[0].length) {
      word = word.slice(0, start[0].length - end[0].length);
    }
    return word;
  }).join(" ");
};



remove("!!!!Hi!! Hi!! !Hi!!! !!!Hi");
