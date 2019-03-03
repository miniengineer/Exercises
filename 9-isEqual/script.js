function comparison(str1,str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  var letterPosition = 0;
  while(letterPosition < str1.length) {
    if(str1[letterPosition] === str2[letterPosition]) {
      letterPosition++;
    } else {
      return false;
    }
  } return true;
}

comparison("минара is smart","минира is smart");
