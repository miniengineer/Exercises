function numberRequest() {
  var enterNumber = Number(prompt("Can you pick a number?"));
  var result = 1;
  while(enterNumber > 0) {
    if (enterNumber % 3 == 0 || enterNumber % 5 == 0) {
      result += enterNumber;
    }
    enterNumber--;
  }
  return(result);
}

alert(numberRequest())

/** Modify the previous program such that only multiples of three or five are considered in the sum,
 e.g. 3, 5, 6, 9, 10, 12, 15 for n=17 **/
