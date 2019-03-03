/** Modify the previous program such that only multiples of three or five are considered in the sum,
 e.g. 3, 5, 6, 9, 10, 12, 15 for n=17 **/

function sumOfThreeOrFive(number) {
  var result = 1;
  while(number > 0) {
    if (number % 3 === 0 || number % 5 === 0) {
      result += number;
    }
    number--;
  }
  return result;
}

var enterNumber = Number(prompt("Can you pick a number?"));
document.write(sumOfThreeOrFive(enterNumber));
