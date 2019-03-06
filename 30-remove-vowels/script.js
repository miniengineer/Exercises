// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments,
// neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
// Note: for this kata y isn't considered a vowel.
//
// These letters are vowels in English: A, E, I, O, U

function deleteVowels(string) {
  var array = ["a","A","E","e","I","i","O","o","U","u"];
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (array.includes(string[i]) === false) {
      result += string[i];
    }
  }
  return result;
}


deleteVowels("This is hilarious!");
