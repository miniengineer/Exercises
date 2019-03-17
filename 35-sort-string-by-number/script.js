// Your order, please
// Your task is to sort a given string.
// Each word in the string will contain a single number.
// This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.
//
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//v match prototype return value array na indekse 0 vseqda budet to shto bez skobok, a vse posleduyushiye indeksi budut match caption group


function sortByNumber(string) {
  var array = string.split(" ").sort(function compare(a,b) {
    if (Number(a.match(/\d+/)[0]) < Number(b.match(/(\d+)/)[0])) {
      return -1;
    }
    if (Number(a.match(/(\d+)/)[0]) > Number(b.match(/(\d+)/)[0])) {
      return 1;
    }
    return 0;
  }).join(" ");
  return array;
}

sortByNumber("4of Fo13r pe6ople g3ood th5e the2");
