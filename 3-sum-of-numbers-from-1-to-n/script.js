function numberRequest() {
  var enterNumber = Number(prompt("Can you pick a number?"));
  var result = 1;
  while(enterNumber > 0) {
    result += enterNumber;
    enterNumber--;
  }
  return(result);
}

alert(numberRequest());
