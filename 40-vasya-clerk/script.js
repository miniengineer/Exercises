// The new "Avengers" movie has just been released! There are a lot of people at the cinema
// box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill.
// An "Avengers" ticket costs 25 dollars.
//
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//
// Can Vasya sell a ticket to each person and give the change if he initially has no money
// and sells the tickets strictly in the order people follow in the line?
//
// Return YES, if Vasya can sell a ticket to each person and give the change with the bills
// he has at hand at that moment.
// Otherwise return NO.
//
// Examples:
// tickets([25, 25, 50])  => YES
// tickets([25, 100])  => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100])  => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

I need to write a function which gets array as an input
I would also need to create an object with key and values
my keys would be bills and values will be number of those bills

every time when the bill is more than 25 I would need to give a change
so I would need to search my array for change  (are there bills that in sum give me the current bill?)

function giveChange(array) {
  var bills = [{twentyFive: 0}, {fifty: 0}];
  for(var = 0; i < array.length; i++) {
    if(array[i] == 25) {
      bills[0].twentyFive++;
    } else if(array[i] == 50) {
      bills[0].twentyFive--;
      bills[1].fifty++;
    } else {
      array.forEach( element => bills[0].twentyFive > 3 || bills[0].twentyFive > 0 && bills[1].fifty > 0);
    };
  };
};
