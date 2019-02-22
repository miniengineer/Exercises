debugger;

function isEqual(str1,str2) {
  if(str1.length === str2.length) {
    return comparison(str1,str2);
  } else {
    return false;
  }
}

function comparison(str1,str2) {
  var letterPosition = 0;
  while(letterPosition < str1.length) {
    if(str1[letterPosition] === str2[letterPosition]) {
      letterPosition++;
    } else {
      return false;
    }
  } return true;
}

console.log(isEqual("минара is smart","минира is smart"));
