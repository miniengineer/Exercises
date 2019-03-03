// Write a program that prints the next 20 leap years.

function leapYearList(lastLeapYear) {
  var array = [];
  while(lastLeapYear < 2100) {
    lastLeapYear += 4;
    array.push("\n" + lastLeapYear);
  }
  return array;
}

document.write(leapYearList(2016));
