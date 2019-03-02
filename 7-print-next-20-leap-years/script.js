// Write a program that prints the next 20 leap years.


function leapYearList(lastLeapYear) {
  while(lastLeapYear < 2100) {
    lastLeapYear += 4;
    document.write(lastLeapYear + "\n");
  }
}

leapYearList(2016);
