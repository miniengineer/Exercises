var letter1 = "";
var letter2 = "";
var letterPosition = 0;


function isEqual(str1,str2) {
  if(str1.length === str2.length) {
    return comparison(str1,str2);
  }
}

function comparison(str1,str2) {
  while(letterPosition < str1.length) {
    letter1 += str1[letterPosition];
    letter2 += str2[letterPosition];
    if(letter1 === letter2) {
      letterPosition++;
    } else {
      return false;
    }
  } return true;
}

isEqual("cat","cat");
