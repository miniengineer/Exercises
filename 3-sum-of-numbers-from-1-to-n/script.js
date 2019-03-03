function sumOfN(number) {
  var result = 1;
  while(number > 0) {
    result += number;
    number--;
  }
  return(result);
}

var enterNumber = Number(prompt("Can you pick a number?"));
alert(sumOfN(enterNumber));
